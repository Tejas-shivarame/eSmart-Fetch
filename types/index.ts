import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: string;
  accent?: "purple" | "blue";
}

export interface FeatureCardData {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: "purple" | "blue";
  href: string;
}

export interface RegionNode {
  id: string;
  label: string;
  status: "active" | "syncing";
  x: number; // percentage position within the map
  y: number;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export interface ValuePillarData {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: "purple" | "blue";
}

export interface MissionPoint {
  text: string;
}

export interface CompanyLocation {
  label: string;
  address: string;
}

export interface CompanyInfo {
  phone: string;
  phoneDisplay: string;
  email: string;
  since: string;
  locations: CompanyLocation[];
  gstin: string;
}

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
}

export interface QualityPillar {
  title: string;
  tagline: string;
  image: string;
}