export type ModelCategory =
  | "General"
  | "Reasoning"
  | "Code"
  | "Vision"
  | "Edge"
  | "Open";

export type CatalogModel = {
  id: string;
  name: string;
  maker: string;
  parameters: string;
  parameterBillions: number;
  contextWindow: string;
  contextTokens: number;
  categories: ModelCategory[];
  tags: string[];
  lane: string;
  license: string;
  description: string;
  officialUrl: string;
  featured?: boolean;
  caveat?: string;
};

export const catalogModels: CatalogModel[] = [
  {
    id: "phi-4-mini-instruct",
    name: "Phi-4 Mini Instruct",
    maker: "Microsoft",
    parameters: "3.8B",
    parameterBillions: 3.8,
    contextWindow: "128K",
    contextTokens: 128000,
    categories: ["General", "Reasoning", "Edge"],
    tags: ["Multilingual", "Tools", "Math"],
    lane: "Reasoning",
    license: "MIT",
    description:
      "A compact all-rounder for multilingual chat, tool calls, and math or logic work.",
    officialUrl: "https://huggingface.co/microsoft/Phi-4-mini-instruct",
    featured: true,
  },
  {
    id: "gemma-3-4b-it",
    name: "Gemma 3 4B IT",
    maker: "Google DeepMind",
    parameters: "4B",
    parameterBillions: 4,
    contextWindow: "128K",
    contextTokens: 128000,
    categories: ["General", "Vision", "Reasoning"],
    tags: ["Documents", "Multilingual", "Images"],
    lane: "Multimodal",
    license: "Gemma terms",
    description:
      "A balanced vision-language assistant for chat, image understanding, documents, and summaries.",
    officialUrl: "https://huggingface.co/google/gemma-3-4b-it",
    featured: true,
    caveat: "Weights require acceptance of Google’s usage terms.",
  },
  {
    id: "llama-3-2-3b-instruct",
    name: "Llama 3.2 3B Instruct",
    maker: "Meta",
    parameters: "3.21B",
    parameterBillions: 3.21,
    contextWindow: "128K",
    contextTokens: 128000,
    categories: ["General", "Edge"],
    tags: ["Chat", "RAG", "Multilingual"],
    lane: "Generalist",
    license: "Llama 3.2",
    description:
      "A widely supported text assistant for chat, retrieval, and summarization in local ecosystems.",
    officialUrl: "https://huggingface.co/meta-llama/Llama-3.2-3B-Instruct",
  },
  {
    id: "qwen-3-5-4b",
    name: "Qwen3.5 4B",
    maker: "Qwen",
    parameters: "4B LM",
    parameterBillions: 4,
    contextWindow: "262K",
    contextTokens: 262000,
    categories: ["General", "Reasoning", "Code", "Vision"],
    tags: ["Agents", "Tools", "Multilingual"],
    lane: "Agentic",
    license: "Apache-2.0",
    description:
      "A small multimodal agent model with thinking, code, tool use, and unusually long context.",
    officialUrl: "https://huggingface.co/Qwen/Qwen3.5-4B",
    featured: true,
    caveat:
      "The language model is 4B; the complete multimodal checkpoint is roughly 5B.",
  },
  {
    id: "deepseek-r1-distill-qwen-7b",
    name: "DeepSeek R1 Distill Qwen 7B",
    maker: "DeepSeek",
    parameters: "7B class",
    parameterBillions: 7.6,
    contextWindow: "131K",
    contextTokens: 131000,
    categories: ["Reasoning", "Code"],
    tags: ["Math", "Long-form", "Distilled"],
    lane: "Deep reasoning",
    license: "MIT",
    description:
      "A dense math-and-code reasoner distilled from R1 for hard problems that benefit from more working.",
    officialUrl:
      "https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B",
    caveat:
      "The checkpoint supports 131K; common local deployments may configure a smaller window.",
  },
  {
    id: "granite-3-3-8b-instruct",
    name: "Granite 3.3 8B Instruct",
    maker: "IBM",
    parameters: "8B",
    parameterBillions: 8,
    contextWindow: "128K",
    contextTokens: 128000,
    categories: ["General", "Reasoning", "Code", "Open"],
    tags: ["RAG", "Extraction", "Tools"],
    lane: "Enterprise RAG",
    license: "Apache-2.0",
    description:
      "A permissive all-rounder for retrieval, extraction, code, long documents, and function calling.",
    officialUrl:
      "https://huggingface.co/ibm-granite/granite-3.3-8b-instruct",
  },
  {
    id: "smollm3-3b",
    name: "SmolLM3 3B",
    maker: "Hugging Face",
    parameters: "3B",
    parameterBillions: 3,
    contextWindow: "64K",
    contextTokens: 64000,
    categories: ["General", "Reasoning", "Edge", "Open"],
    tags: ["Tools", "Multilingual", "Fully open"],
    lane: "Open generalist",
    license: "Apache-2.0",
    description:
      "A fully open local reasoner with tool use and multilingual support in a compact footprint.",
    officialUrl: "https://huggingface.co/HuggingFaceTB/SmolLM3-3B",
  },
  {
    id: "lfm2-2-6b",
    name: "LFM2 2.6B",
    maker: "Liquid AI",
    parameters: "2.57B",
    parameterBillions: 2.57,
    contextWindow: "32K",
    contextTokens: 32000,
    categories: ["General", "Reasoning", "Edge"],
    tags: ["Agents", "RAG", "Extraction"],
    lane: "Fast agent",
    license: "LFM Open 1.0",
    description:
      "An edge-oriented hybrid model for agents, extraction, retrieval, and everyday conversation.",
    officialUrl: "https://huggingface.co/LiquidAI/LFM2-2.6B",
    caveat:
      "Commercial use is limited by the model license for entities above its revenue threshold.",
  },
  {
    id: "qwen-2-5-coder-7b-instruct",
    name: "Qwen2.5 Coder 7B",
    maker: "Qwen",
    parameters: "7.61B",
    parameterBillions: 7.61,
    contextWindow: "131K",
    contextTokens: 131000,
    categories: ["Code", "Reasoning", "Open"],
    tags: ["Debugging", "Repair", "Agents"],
    lane: "Code specialist",
    license: "Apache-2.0",
    description:
      "A code-first assistant for generation, repair, reasoning, and code-agent workflows.",
    officialUrl: "https://huggingface.co/Qwen/Qwen2.5-Coder-7B-Instruct",
  },
  {
    id: "ministral-8b-instruct-2410",
    name: "Ministral 8B Instruct",
    maker: "Mistral AI",
    parameters: "8.02B",
    parameterBillions: 8.02,
    contextWindow: "128K",
    contextTokens: 128000,
    categories: ["General", "Code", "Edge"],
    tags: ["Multilingual", "Tools", "Functions"],
    lane: "Tool use",
    license: "Research",
    description:
      "A local-first multilingual text model trained heavily on code and equipped for function calling.",
    officialUrl:
      "https://huggingface.co/mistralai/Ministral-8B-Instruct-2410",
    caveat:
      "The public license is research-only; commercial use requires a separate license.",
  },
  {
    id: "olmo-2-0425-1b-instruct",
    name: "OLMo 2 1B Instruct",
    maker: "Ai2",
    parameters: "1B",
    parameterBillions: 1,
    contextWindow: "4K",
    contextTokens: 4000,
    categories: ["General", "Edge", "Open"],
    tags: ["Research", "Transparent", "English"],
    lane: "Research",
    license: "Apache-2.0",
    description:
      "A transparent research model with open data and training details in an unusually small package.",
    officialUrl:
      "https://huggingface.co/allenai/OLMo-2-0425-1B-Instruct",
  },
  {
    id: "apertus-8b-instruct-2509",
    name: "Apertus 8B Instruct",
    maker: "Swiss AI Initiative",
    parameters: "8B",
    parameterBillions: 8,
    contextWindow: "64K",
    contextTokens: 64000,
    categories: ["General", "Open"],
    tags: ["Multilingual", "Tools", "Compliance"],
    lane: "Multilingual",
    license: "Apache-2.0",
    description:
      "A fully open, compliance-minded assistant with exceptionally broad multilingual coverage.",
    officialUrl:
      "https://huggingface.co/swiss-ai/Apertus-8B-Instruct-2509",
  },
  {
    id: "nemotron-3-nano-4b",
    name: "Nemotron 3 Nano 4B",
    maker: "NVIDIA",
    parameters: "3.97B",
    parameterBillions: 3.97,
    contextWindow: "262K",
    contextTokens: 262000,
    categories: ["General", "Reasoning", "Code", "Edge"],
    tags: ["Tools", "Switchable reasoning", "Agents"],
    lane: "GPU edge",
    license: "Nemotron Open",
    description:
      "An edge-focused model with switchable reasoning and tool use, tuned for NVIDIA GPU stacks.",
    officialUrl:
      "https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Nano-4B-BF16",
  },
  {
    id: "minicpm-v-4-6",
    name: "MiniCPM-V 4.6",
    maker: "OpenBMB",
    parameters: "≈1.2B",
    parameterBillions: 1.2,
    contextWindow: "262K",
    contextTokens: 262000,
    categories: ["Vision", "Edge", "Open"],
    tags: ["Video", "OCR", "On-device"],
    lane: "Visual analysis",
    license: "Apache-2.0",
    description:
      "A tiny image, video, and OCR assistant designed specifically for phones and edge devices.",
    officialUrl: "https://huggingface.co/openbmb/MiniCPM-V-4.6",
    caveat:
      "The total combines a small language model and vision encoder; parameter totals are approximate.",
  },
  {
    id: "exaone-4-0-1-2b",
    name: "EXAONE 4.0 1.2B",
    maker: "LG AI Research",
    parameters: "1.28B",
    parameterBillions: 1.28,
    contextWindow: "64K",
    contextTokens: 64000,
    categories: ["General", "Reasoning", "Code", "Edge"],
    tags: ["Tools", "Korean", "On-device"],
    lane: "Tiny reasoner",
    license: "EXAONE NC",
    description:
      "A tiny hybrid reasoner with tool use and an English, Korean, and Spanish focus.",
    officialUrl:
      "https://huggingface.co/LGAI-EXAONE/EXAONE-4.0-1.2B",
    caveat:
      "The public license is non-commercial for ordinary research and education use.",
  },
];

