import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  BarChart3,
  Blocks,
  CloudCog,
  Code2,
  Cpu,
  Layers3,
  LineChart,
  LockKeyhole,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Workflow
} from "lucide-react";
import type { IconKey } from "@/types/content";

const iconMap: Record<IconKey, LucideIcon> = {
  "app-window": AppWindow,
  "bar-chart": BarChart3,
  blocks: Blocks,
  cloud: CloudCog,
  code: Code2,
  cpu: Cpu,
  layers: Layers3,
  "line-chart": LineChart,
  lock: LockKeyhole,
  palette: Palette,
  rocket: Rocket,
  search: Search,
  shield: ShieldCheck,
  smartphone: Smartphone,
  workflow: Workflow
};

export function getIcon(iconKey: IconKey): LucideIcon {
  return iconMap[iconKey] ?? AppWindow;
}
