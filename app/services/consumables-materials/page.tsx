import { ServiceLayout } from "@/components/services/ServiceLayout";
import { consumablesMaterials } from "@/lib/service-data";

export default function AudioVisualSolutionsPage() {
  return <ServiceLayout service={consumablesMaterials} />;
}