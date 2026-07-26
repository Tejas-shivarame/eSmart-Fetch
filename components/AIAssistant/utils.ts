import { KNOWLEDGE_BASE } from "./knowledge";

export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function formatTime(timestamp: number): string {
  return new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

const FALLBACK =
  "I'm sorry, I couldn't find the information you're looking for. Please contact our team for more details or ask about our services, solutions, or products.";

export function getBotResponse(rawQuery: string): string {
  const q = rawQuery.toLowerCase();

  /* -------------------------------------------------------------------------- */
  /* Greetings                                                                   */
  /* -------------------------------------------------------------------------- */

  if (/^hi$|^hello$|^hey$|good morning|good afternoon|good evening/i.test(q)) {
    return `Hello! 👋 Welcome to **${KNOWLEDGE_BASE.name}**.

I'm here to help you with information about our services, products, networking, security, IT infrastructure, and enterprise technology solutions.

How can I assist you today?`;
  }

  /* -------------------------------------------------------------------------- */
  /* About Company                                                                */
  /* -------------------------------------------------------------------------- */

  if (/who are you|about|company|introduce|esmart fetch/i.test(q)) {
    return `**${KNOWLEDGE_BASE.name}**\n\n${KNOWLEDGE_BASE.description}`;
  }

  /* -------------------------------------------------------------------------- */
  /* Services                                                                     */
  /* -------------------------------------------------------------------------- */

  if (
    /service|offer|solution|provide|what do you do|what can you do/i.test(q)
  ) {
    return `We provide the following technology solutions:

${KNOWLEDGE_BASE.services.map((service) => `• ${service}`).join("\n")}`;
  }

  /* -------------------------------------------------------------------------- */
  /* Products                                                                     */
  /* -------------------------------------------------------------------------- */

  if (
    /product|products|hardware|equipment|material|supply|catalog/i.test(q)
  ) {
    const p = KNOWLEDGE_BASE.products;

    return `We supply a wide range of enterprise IT products.

**Networking Equipment**
${p.networkingEquipment.map((i) => `• ${i}`).join("\n")}

**Server Infrastructure**
${p.serverInfrastructure.map((i) => `• ${i}`).join("\n")}

**Computer Hardware**
${p.computerHardware.map((i) => `• ${i}`).join("\n")}

**Storage Solutions**
${p.storageSolutions.map((i) => `• ${i}`).join("\n")}

**Industrial Systems**
${p.industrialSystems.map((i) => `• ${i}`).join("\n")}

**Accessories**
${p.accessories.map((i) => `• ${i}`).join("\n")}`;
  }

  /* -------------------------------------------------------------------------- */
  /* Networking                                                                   */
  /* -------------------------------------------------------------------------- */

  if (/network|networking|wifi|lan|wan|switch|router/i.test(q)) {
    return `We provide complete networking solutions including:

• Enterprise Routers
• Managed Switches
• Wireless Access Points
• Network Firewalls
• Structured Cabling
• Fiber Optic Solutions
• LAN/WAN Design
• Enterprise Wi-Fi
• Installation & Configuration
• AMC & Support`;
  }

  /* -------------------------------------------------------------------------- */
  /* IT Infrastructure                                                            */
  /* -------------------------------------------------------------------------- */

  if (
    /it infrastructure|server|rack|data center|cabling|storage|ups/i.test(q)
  ) {
    return `Our IT Infrastructure solutions include:

• Rack Servers
• Blade Servers
• NAS Storage
• SAN Storage
• Data Center Infrastructure
• Server Racks
• UPS Systems
• Patch Panels
• Network Cables
• Backup Appliances`;
  }

  /* -------------------------------------------------------------------------- */
  /* Computer Hardware                                                            */
  /* -------------------------------------------------------------------------- */

  if (/laptop|desktop|pc|mini pc|thin client|computer/i.test(q)) {
    return `We supply enterprise computer hardware including:

• Business Laptops
• Desktop Workstations
• Mini PCs
• Thin Clients
• Enterprise Servers
• Storage Systems
• Networking Accessories`;
  }

  /* -------------------------------------------------------------------------- */
  /* Industrial Solutions                                                         */
  /* -------------------------------------------------------------------------- */

  if (/industrial|iot|automation|embedded|controller/i.test(q)) {
    return `We provide industrial technology products including:

• Industrial PCs
• IoT Devices
• Embedded Controllers
• Automation Hardware`;
  }

  /* -------------------------------------------------------------------------- */
  /* Security Solutions                                                           */
  /* -------------------------------------------------------------------------- */

  if (
    /security|surveillance|cctv|camera|access control|biometric/i.test(q)
  ) {
    return `We provide:

• CCTV Surveillance
• IP Cameras
• Access Control
• Biometric Attendance
• Video Door Phones
• Enterprise Security Systems`;
  }

  /* -------------------------------------------------------------------------- */
  /* Fire Safety                                                                  */
  /* -------------------------------------------------------------------------- */

  if (/fire|alarm|fire safety|smoke/i.test(q)) {
    return `We design and deploy intelligent fire alarm and fire safety systems for commercial and industrial environments.`;
  }

  /* -------------------------------------------------------------------------- */
  /* Audio Visual                                                                 */
  /* -------------------------------------------------------------------------- */

  if (/audio|video|conference|projector|display|av/i.test(q)) {
    return `Our AV solutions include:

• Video Conferencing
• Interactive Displays
• Digital Signage
• Conference Room Solutions
• Projectors
• PA Systems`;
  }

  /* -------------------------------------------------------------------------- */
  /* Smart Office                                                                 */
  /* -------------------------------------------------------------------------- */

  if (/smart office|automation|building management|bms/i.test(q)) {
    return `We provide Smart Office and Building Management solutions including automation, centralized monitoring, and energy management systems.`;
  }

  /* -------------------------------------------------------------------------- */
  /* Industries                                                                   */
  /* -------------------------------------------------------------------------- */

  if (/industry|industries|sector|clients/i.test(q)) {
    return `We serve industries including:

${KNOWLEDGE_BASE.industries.map((i) => `• ${i}`).join("\n")}`;
  }

  /* -------------------------------------------------------------------------- */
  /* Brands                                                                       */
  /* -------------------------------------------------------------------------- */

  if (
    /brand|brands|cisco|juniper|aruba|ubiquiti|mikrotik|fortinet|dell|hpe|hp|hikvision|bosch|dahua|honeywell|apc/i.test(
      q
    )
  ) {
    return `We work with leading technology brands:

${KNOWLEDGE_BASE.brands.map((b) => `• ${b}`).join("\n")}`;
  }

  /* -------------------------------------------------------------------------- */
  /* Pricing                                                                      */
  /* -------------------------------------------------------------------------- */

  if (/price|pricing|cost|quotation|quote|estimate/i.test(q)) {
    return `Pricing depends on the project scope, products, and implementation requirements. Contact us for a customized quotation.`;
  }

  /* -------------------------------------------------------------------------- */
  /* Careers                                                                      */
  /* -------------------------------------------------------------------------- */

  if (/career|job|vacancy|hiring|join/i.test(q)) {
    return `We're always looking for talented professionals. Contact us to learn about current opportunities.`;
  }

  /* -------------------------------------------------------------------------- */
  /* Contact                                                                      */
  /* -------------------------------------------------------------------------- */

  if (/contact|email|phone|call|reach|address/i.test(q)) {
    const c = KNOWLEDGE_BASE.contact;

    return `**Contact ${KNOWLEDGE_BASE.name}**

📧 ${c.email}

📞 ${c.phone}

🌐 ${c.website}`;
  }

  /* -------------------------------------------------------------------------- */
  /* Thanks                                                                       */
  /* -------------------------------------------------------------------------- */

  if (/thanks|thank you|thx/i.test(q)) {
    return "You're welcome! 😊 Let us know if you have any questions about our services or products.";
  }

  /* -------------------------------------------------------------------------- */
  /* Default                                                                      */
  /* -------------------------------------------------------------------------- */

  return FALLBACK;
}