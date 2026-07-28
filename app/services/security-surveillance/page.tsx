import { ServiceLayout } from "@/components/services/ServiceLayout";
import { securitySurveillance } from "@/lib/service-data";

export default function SecuritySurveillancePage() {
  return <ServiceLayout service={securitySurveillance} />;
}