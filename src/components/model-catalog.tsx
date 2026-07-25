"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import {
  catalogModels,
  type CatalogModel,
  type ModelCategory,
} from "@/data/models";

const filters: Array<"All" | ModelCategory> = [
  "All",
  "Reasoning",
  "Code",
  "Vision",
  "Edge",
  "Open",
];

const barSets = [
  [38, 70, 51, 84, 47, 63, 92, 55],
  [76, 42, 87, 56, 66, 36, 79, 61],
  [52, 88, 44, 68, 91, 58, 73, 40],
  [85, 57, 36, 74, 62, 94, 49, 70],
];

type SortValue = "curated" | "smallest" | "context";

function getSearchText(model: CatalogModel) {
  return [
    model.name,
    model.maker,
    model.description,
    model.lane,
    model.license,
    ...model.categories,
    ...model.tags,
  ]
    .join(" ")
    .toLowerCase();
}

export function ModelCatalog() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>(
    "All",
  );
  const [sort, setSort] = useState<SortValue>("curated");

  const visibleModels = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const matches = catalogModels.filter((model) => {
      const matchesFilter =
        activeFilter === "All" || model.categories.includes(activeFilter);
      const matchesQuery =
        !normalizedQuery || getSearchText(model).includes(normalizedQuery);

      return matchesFilter && matchesQuery;
    });

    if (sort === "smallest") {
      return [...matches].sort(
        (left, right) => left.parameterBillions - right.parameterBillions,
      );
    }

    if (sort === "context") {
      return [...matches].sort(
        (left, right) => right.contextTokens - left.contextTokens,
      );
    }

    return [...matches].sort(
      (left, right) => Number(Boolean(right.featured)) - Number(Boolean(left.featured)),
    );
  }, [activeFilter, query, sort]);

  const resetCatalog = () => {
    setQuery("");
    setActiveFilter("All");
    setSort("curated");
  };

  const isFiltered =
    query.length > 0 || activeFilter !== "All" || sort !== "curated";

  return (
    <div className="catalog">
      <div className="previewNotice">
        <span className="noticeDot" aria-hidden="true" />
        <p>
          <strong>Catalog preview.</strong> These 15 profiles are hardcoded for
          now. Install flows and Helios compatibility checks are not connected
          yet.
        </p>
      </div>

      <div className="catalogControls">
        <div className="searchField">
          <label htmlFor="model-search">Search the model catalog</label>
          <div className="searchInputWrap">
            <Search size={17} strokeWidth={1.6} aria-hidden="true" />
            <input
              id="model-search"
              type="search"
              placeholder="Search model, maker, role, or license"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query && (
              <button
                className="clearSearch"
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear model search"
              >
                <X size={15} strokeWidth={1.8} aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        <div className="sortField">
          <label htmlFor="model-sort">
            <SlidersHorizontal size={14} strokeWidth={1.6} aria-hidden="true" />
            Sort
          </label>
          <div className="selectWrap">
            <select
              id="model-sort"
              value={sort}
              onChange={(event) => setSort(event.target.value as SortValue)}
            >
              <option value="curated">Curated first</option>
              <option value="smallest">Smallest first</option>
              <option value="context">Longest context</option>
            </select>
            <ChevronDown size={14} strokeWidth={1.7} aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="filterRow">
        <div className="filterChips" aria-label="Filter models by capability">
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
          <span>{String(visibleModels.length).padStart(2, "0")}</span>
          {visibleModels.length === 1 ? " profile" : " profiles"}
        </div>
      </div>

      {visibleModels.length > 0 ? (
        <div className="modelGrid">
          {visibleModels.map((model, index) => (
            <article className="modelCard" key={model.id}>
              <div className="modelCardTop">
                <span className="modelIndex">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(visibleModels.length).padStart(2, "0")}
                </span>
                <span className="profileState">
                  {model.featured ? "Featured profile" : "Catalog preview"}
                </span>
              </div>

              <div className="modelIdentity">
                <span>{model.maker}</span>
                <h3>{model.name}</h3>
                <p>{model.description}</p>
              </div>

              <div className="fingerprint" aria-hidden="true">
                {barSets[index % barSets.length].map((height, barIndex) => (
                  <span
                    key={`${model.id}-${barIndex}`}
                    style={{ "--bar-height": `${height}%` } as React.CSSProperties}
                  />
                ))}
              </div>

              <dl className="modelMetadata">
                <div>
                  <dt>Suggested lane</dt>
                  <dd>{model.lane}</dd>
                </div>
                <div>
                  <dt>Parameters</dt>
                  <dd>{model.parameters}</dd>
                </div>
                <div>
                  <dt>Context</dt>
                  <dd>{model.contextWindow}</dd>
                </div>
                <div>
                  <dt>License</dt>
                  <dd>{model.license}</dd>
                </div>
              </dl>

              <div className="modelTags" aria-label={`${model.name} capabilities`}>
                {model.categories.slice(0, 3).map((category) => (
                  <span key={category}>{category}</span>
                ))}
              </div>

              {model.caveat && <p className="modelCaveat">{model.caveat}</p>}

              <a
                className="modelLink"
                href={model.officialUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open the official model card for ${model.name}`}
              >
                Open official model card
                <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      ) : (
        <div className="emptyCatalog">
          <span>00 / 15</span>
          <h3>No profiles match that search.</h3>
          <p>Try another maker or capability, or return to the full catalog.</p>
          <button type="button" onClick={resetCatalog}>
            Reset the catalog
          </button>
        </div>
      )}

      {isFiltered && visibleModels.length > 0 && (
        <button className="resetCatalog" type="button" onClick={resetCatalog}>
          <X size={14} strokeWidth={1.8} aria-hidden="true" />
          Clear search and filters
        </button>
      )}
    </div>
  );
}

