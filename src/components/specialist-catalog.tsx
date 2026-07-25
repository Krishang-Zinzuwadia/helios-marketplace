"use client";

import { useMemo, useState } from "react";
import {
  Check,
  ChevronDown,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import {
  specialistProfiles,
  type SpecialistDomain,
  type SpecialistProfile,
} from "@/data/specialists";

const filters: Array<"All" | SpecialistDomain> = [
  "All",
  "Build",
  "Operate",
  "Secure",
  "Quality",
  "Data",
  "Knowledge",
];

const barSets = [
  [38, 70, 51, 84, 47, 63, 92, 55],
  [76, 42, 87, 56, 66, 36, 79, 61],
  [52, 88, 44, 68, 91, 58, 73, 40],
  [85, 57, 36, 74, 62, 94, 49, 70],
];

type SortValue = "workflow" | "alphabetical" | "domain";

function getSearchText(profile: SpecialistProfile) {
  return [
    profile.name,
    profile.profileCode,
    profile.description,
    profile.focus,
    profile.workflow,
    profile.input,
    profile.output,
    profile.guardrail,
    ...profile.domains,
    ...profile.capabilities,
    ...profile.responsibilities,
  ]
    .join(" ")
    .toLowerCase();
}

export function SpecialistCatalog() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>(
    "All",
  );
  const [sort, setSort] = useState<SortValue>("workflow");

  const visibleProfiles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const matches = specialistProfiles.filter((profile) => {
      const matchesFilter =
        activeFilter === "All" || profile.domains.includes(activeFilter);
      const matchesQuery =
        !normalizedQuery || getSearchText(profile).includes(normalizedQuery);

      return matchesFilter && matchesQuery;
    });

    if (sort === "alphabetical") {
      return [...matches].sort((left, right) =>
        left.name.localeCompare(right.name),
      );
    }

    if (sort === "domain") {
      return [...matches].sort((left, right) => {
        const domainOrder = left.domains[0].localeCompare(right.domains[0]);
        return domainOrder || left.order - right.order;
      });
    }

    return [...matches].sort((left, right) => left.order - right.order);
  }, [activeFilter, query, sort]);

  const resetCatalog = () => {
    setQuery("");
    setActiveFilter("All");
    setSort("workflow");
  };

  const isFiltered =
    query.length > 0 || activeFilter !== "All" || sort !== "workflow";

  return (
    <div className="catalog">
      <div className="previewNotice">
        <span className="noticeDot" aria-hidden="true" />
        <p>
          <strong>Early preview.</strong> These 15 roles are hardcoded. Model
          files, Helios runtime setup, eval results, and install buttons come
          later.
        </p>
      </div>

      <div className="catalogControls">
        <div className="searchField">
          <label htmlFor="specialist-search">Search specialists</label>
          <div className="searchInputWrap">
            <Search size={17} strokeWidth={1.6} aria-hidden="true" />
            <input
              id="specialist-search"
              type="search"
              placeholder='Try “front-end”, “security”, or “API”'
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query && (
              <button
                className="clearSearch"
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear specialist search"
              >
                <X size={15} strokeWidth={1.8} aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        <div className="sortField">
          <label htmlFor="specialist-sort">
            <SlidersHorizontal size={14} strokeWidth={1.6} aria-hidden="true" />
            Sort
          </label>
          <div className="selectWrap">
            <select
              id="specialist-sort"
              value={sort}
              onChange={(event) => setSort(event.target.value as SortValue)}
            >
              <option value="workflow">Catalog order</option>
              <option value="alphabetical">A–Z</option>
              <option value="domain">By area</option>
            </select>
            <ChevronDown size={14} strokeWidth={1.7} aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="filterRow">
        <div
          className="filterChips"
          aria-label="Filter specialists by area"
        >
          {filters.map((filter) => (
            <button
              className="filterChip"
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {activeFilter === filter && (
                <Check size={12} strokeWidth={2} aria-hidden="true" />
              )}
              {filter}
            </button>
          ))}
        </div>

        <div className="resultSummary" aria-live="polite" aria-atomic="true">
          <span>{String(visibleProfiles.length).padStart(2, "0")}</span>
          {visibleProfiles.length === 1 ? " specialist" : " specialists"}
        </div>
      </div>

      {visibleProfiles.length > 0 ? (
        <div className="modelGrid">
          {visibleProfiles.map((profile, index) => (
            <article className="modelCard" key={profile.id}>
              <div className="modelCardTop">
                <span className="modelIndex">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(visibleProfiles.length).padStart(2, "0")}
                </span>
                <span className="profileState">
                  {profile.featured ? "Featured" : "Specialist"}
                </span>
              </div>

              <div className="modelIdentity">
                <span>{profile.profileCode}</span>
                <h3>{profile.name}</h3>
                <p>{profile.description}</p>
              </div>

              <div className="fingerprint" aria-hidden="true">
                {barSets[index % barSets.length].map((height, barIndex) => (
                  <span
                    key={`${profile.id}-${barIndex}`}
                    style={{ "--bar-height": `${height}%` } as React.CSSProperties}
                  />
                ))}
              </div>

              <dl className="modelMetadata">
                <div>
                  <dt>Best for</dt>
                  <dd>{profile.focus}</dd>
                </div>
                <div>
                  <dt>Job</dt>
                  <dd>{profile.workflow}</dd>
                </div>
                <div>
                  <dt>Needs</dt>
                  <dd>{profile.input}</dd>
                </div>
                <div>
                  <dt>Gives back</dt>
                  <dd>{profile.output}</dd>
                </div>
              </dl>

              <div
                className="modelTags"
                aria-label={`${profile.name} capabilities`}
              >
                {profile.capabilities.map((capability) => (
                  <span key={capability}>{capability}</span>
                ))}
              </div>

              <details className="profileDetails">
                <summary>
                  See what it does
                  <ChevronDown size={15} strokeWidth={1.7} aria-hidden="true" />
                </summary>
                <div className="profileDetailsBody">
                  <h4>What it handles</h4>
                  <ul>
                    {profile.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                  <h4>What it won’t do</h4>
                  <p className="profileGuardrail">{profile.guardrail}</p>
                </div>
              </details>
            </article>
          ))}
        </div>
      ) : (
        <div className="emptyCatalog">
          <span>00 / 15</span>
          <h3>Nothing matched.</h3>
          <p>
            Try a simpler search, or clear the filters.
          </p>
          <button type="button" onClick={resetCatalog}>
            Show all specialists
          </button>
        </div>
      )}

      {isFiltered && visibleProfiles.length > 0 && (
        <button className="resetCatalog" type="button" onClick={resetCatalog}>
          <X size={14} strokeWidth={1.8} aria-hidden="true" />
          Clear filters
        </button>
      )}
    </div>
  );
}
