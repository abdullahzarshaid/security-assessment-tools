/* Original screening questions by Abdullah Bin Zarshaid (abdullahzarshaid.com).
   Ported verbatim from the live assessment library; references establish context,
   not full framework coverage. Each area links to a remediation template in the
   open GRC Documentation Kit. Do not paste credentials, client records or raw
   vulnerability evidence into any answer. */
window.ANSWER_LABELS = {implemented:"Operating",partial:"Partial",planned:"Planned",absent:"Not in place",unknown:"Not sure"};
window.ANSWER_VALUES = {implemented:3,partial:2,planned:1,absent:0};
window.KIT_BASE = "https://abdullahzarshaid.github.io/grc-documentation-kit/kit.html#";
window.TRACKS = [
 {
  "id": "nist",
  "title": "NIST CSF 2.0",
  "shortTitle": "NIST CSF 2.0",
  "tagline": "A clearer view of your security programme.",
  "type": "Framework snapshot",
  "minutes": "6 to 8",
  "limitation": "18 original prompts across the six CSF functions. Selected screening topics, not the complete CSF Core or an official NIST score.",
  "source": {
   "label": "NIST Cybersecurity Framework 2.0",
   "url": "https://www.nist.gov/cyberframework"
  },
  "areas": [
   "Govern",
   "Identify",
   "Protect",
   "Detect",
   "Respond",
   "Recover"
  ],
  "questions": [
   {
    "code": "GV1",
    "area": "Govern",
    "title": "Does security have a named decision-maker?",
    "check": "Look for a current owner, agreed responsibilities and an escalation route.",
    "action": "Name a security decision-maker and document who can accept risk.",
    "priority": 3,
    "kit": "gov-pol-01"
   },
   {
    "code": "GV2",
    "area": "Govern",
    "title": "Are important risks reviewed with business leaders?",
    "check": "Look for a dated risk discussion and assigned next actions.",
    "action": "Schedule a risk review with named actions and decision owners.",
    "priority": 2,
    "kit": "gov-pol-01"
   },
   {
    "code": "GV3",
    "area": "Govern",
    "title": "Are critical suppliers included in your security decisions?",
    "check": "Consider access, data handled, service dependency and exit arrangements.",
    "action": "List critical suppliers and establish a proportionate review process.",
    "priority": 2,
    "kit": "gov-pol-01"
   },
   {
    "code": "ID1",
    "area": "Identify",
    "title": "Do you know which systems and services matter most?",
    "check": "Check whether your inventory covers externally hosted services as well as devices.",
    "action": "Build a scoped inventory with business owners and critical dependencies.",
    "priority": 3,
    "kit": "gov-pro-16"
   },
   {
    "code": "ID2",
    "area": "Identify",
    "title": "Do you understand where sensitive information flows?",
    "check": "Choose one important workflow and trace collection, access, storage and sharing.",
    "action": "Document the information flow and its main trust boundaries.",
    "priority": 2,
    "kit": "gov-pro-16"
   },
   {
    "code": "ID3",
    "area": "Identify",
    "title": "Are vulnerabilities tracked through remediation?",
    "check": "Look for an owner, target date, exception decision and closure check.",
    "action": "Create a remediation register and a process for verifying closure.",
    "priority": 2,
    "kit": "gov-pro-16"
   },
   {
    "code": "PR1",
    "area": "Protect",
    "title": "Is stronger authentication enforced on important accounts?",
    "check": "Review administrator access, remote access and recovery paths, not only one application.",
    "action": "Prioritize strong MFA on privileged and externally accessible accounts.",
    "priority": 3,
    "kit": "gov-pro-10"
   },
   {
    "code": "PR2",
    "area": "Protect",
    "title": "Is access removed or changed when roles change?",
    "check": "Inspect recent joiner, mover and leaver records for the systems in scope.",
    "action": "Define access-change owners and test a recent offboarding example.",
    "priority": 3,
    "kit": "gov-pro-10"
   },
   {
    "code": "PR3",
    "area": "Protect",
    "title": "Are baseline configurations and updates maintained?",
    "check": "Look for an approved baseline and evidence of patch or exception handling.",
    "action": "Assign baseline ownership and a risk-based update process.",
    "priority": 2,
    "kit": "gov-pro-10"
   },
   {
    "code": "DE1",
    "area": "Detect",
    "title": "Are security-relevant logs available for important services?",
    "check": "Consider identity, administrator actions and critical application events.",
    "action": "Identify necessary logs, retention, access and a collection owner.",
    "priority": 2,
    "kit": "gov-pro-14"
   },
   {
    "code": "DE2",
    "area": "Detect",
    "title": "Does someone review and act on security alerts?",
    "check": "An enabled tool is not enough: check triage ownership and an example.",
    "action": "Define triage responsibilities and test a representative alert.",
    "priority": 3,
    "kit": "gov-pro-14"
   },
   {
    "code": "DE3",
    "area": "Detect",
    "title": "Have detection gaps been tested recently?",
    "check": "Use an authorized, harmless test and check the expected signal appears.",
    "action": "Run a scoped detection exercise and record missed signals.",
    "priority": 2,
    "kit": "gov-pro-14"
   },
   {
    "code": "RS1",
    "area": "Respond",
    "title": "Can the team find an incident contact and decision process?",
    "check": "Check the plan is available during account or network disruption.",
    "action": "Keep an accessible response contact tree and decision guide.",
    "priority": 3,
    "kit": "gov-pro-07"
   },
   {
    "code": "RS2",
    "area": "Respond",
    "title": "Are containment and evidence-preservation decisions planned?",
    "check": "Identify who can isolate services and who protects investigative records.",
    "action": "Document containment authority and evidence-handling steps.",
    "priority": 2,
    "kit": "gov-pro-07"
   },
   {
    "code": "RS3",
    "area": "Respond",
    "title": "Has an incident scenario been rehearsed?",
    "check": "Look for an exercise record, lessons and follow-up owners.",
    "action": "Run a short tabletop and track the resulting improvements.",
    "priority": 2,
    "kit": "gov-pro-07"
   },
   {
    "code": "RC1",
    "area": "Recover",
    "title": "Have important backups been restored in a test?",
    "check": "A successful backup job does not establish that the data can be restored.",
    "action": "Test recovery of a scoped critical workload and record the outcome.",
    "priority": 3,
    "kit": "gov-pro-13"
   },
   {
    "code": "RC2",
    "area": "Recover",
    "title": "Are recovery priorities agreed with service owners?",
    "check": "Check dependencies and realistic recovery expectations.",
    "action": "Agree a recovery sequence and validate dependencies.",
    "priority": 2,
    "kit": "gov-pro-13"
   },
   {
    "code": "RC3",
    "area": "Recover",
    "title": "Do recovery exercises feed back into the security plan?",
    "check": "Look for documented lessons and completed follow-up work.",
    "action": "Assign owners to recovery lessons and review completion.",
    "priority": 2,
    "kit": "gov-pro-13"
   }
  ]
 },
 {
  "id": "iso",
  "title": "ISO 27001 readiness",
  "shortTitle": "ISO 27001 readiness",
  "tagline": "Start with the management system, not a badge.",
  "type": "Readiness screening",
  "minutes": "4 to 6",
  "limitation": "12 original preparation questions. Does not reproduce ISO clauses or Annex A, determine conformity, or replace a licensed standard and qualified assessment.",
  "source": {
   "label": "ISO/IEC 27001 overview",
   "url": "https://www.iso.org/standard/27001"
  },
  "areas": [
   "Scope",
   "Risk",
   "Controls",
   "Improvement"
  ],
  "questions": [
   {
    "code": "IS1",
    "area": "Scope",
    "title": "Is the information-security programme boundary documented?",
    "check": "Name entities, locations, services, dependencies and exclusions.",
    "action": "Write and approve an initial programme scope.",
    "priority": 3,
    "kit": "isms-stm-01"
   },
   {
    "code": "IS2",
    "area": "Scope",
    "title": "Are stakeholder and contractual expectations understood?",
    "check": "Review relevant customer requirements and who evaluates applicability.",
    "action": "Create a requirements register with review ownership.",
    "priority": 2,
    "kit": "isms-stm-01"
   },
   {
    "code": "IS3",
    "area": "Scope",
    "title": "Has management assigned resources and responsibilities?",
    "check": "Check actual decision authority, time and responsibilities.",
    "action": "Agree responsibility and resourcing for the scoped programme.",
    "priority": 2,
    "kit": "isms-stm-01"
   },
   {
    "code": "IR1",
    "area": "Risk",
    "title": "Is the risk-assessment method consistent and documented?",
    "check": "Different reviewers should understand how likelihood, impact and acceptance are decided.",
    "action": "Define a repeatable risk method and acceptance criteria.",
    "priority": 2,
    "kit": "gov-pro-05"
   },
   {
    "code": "IR2",
    "area": "Risk",
    "title": "Do risk treatments have accountable owners?",
    "check": "Trace a risk through treatment, target date and residual-risk decision.",
    "action": "Assign treatments and capture residual-risk decisions.",
    "priority": 3,
    "kit": "gov-pro-05"
   },
   {
    "code": "IR3",
    "area": "Risk",
    "title": "Are control applicability decisions explained?",
    "check": "Check inclusions and exclusions against the real scope and risks.",
    "action": "Prepare a reviewed applicability rationale using the licensed standard.",
    "priority": 2,
    "kit": "gov-pro-05"
   },
   {
    "code": "IC1",
    "area": "Controls",
    "title": "Are key policies approved and maintained?",
    "check": "A template alone is not an approved organizational policy.",
    "action": "Assign policy owners and a review/approval cycle.",
    "priority": 2,
    "kit": "gov-pro-10"
   },
   {
    "code": "IC2",
    "area": "Controls",
    "title": "Can operating records support your control descriptions?",
    "check": "Check current evidence for access reviews, changes, backups and response.",
    "action": "Map selected control claims to dated operating records.",
    "priority": 3,
    "kit": "gov-pro-10"
   },
   {
    "code": "IC3",
    "area": "Controls",
    "title": "Do people understand their security responsibilities?",
    "check": "Look for role-appropriate instruction and feedback, not only attendance.",
    "action": "Run role-relevant training and record follow-up needs.",
    "priority": 2,
    "kit": "gov-pro-10"
   },
   {
    "code": "II1",
    "area": "Improvement",
    "title": "Has the programme been independently challenged internally?",
    "check": "Identify review scope, reviewer objectivity and recorded findings.",
    "action": "Plan an internal audit with suitable objectivity.",
    "priority": 2,
    "kit": "gov-pro-04"
   },
   {
    "code": "II2",
    "area": "Improvement",
    "title": "Does management review performance and unresolved risks?",
    "check": "Look for decisions, inputs and follow-up from a management review.",
    "action": "Prepare a management review with explicit decisions.",
    "priority": 2,
    "kit": "gov-pro-04"
   },
   {
    "code": "II3",
    "area": "Improvement",
    "title": "Are corrective actions checked for effectiveness?",
    "check": "Closing a ticket is not the same as showing the issue was addressed.",
    "action": "Define and test effectiveness criteria for corrective action.",
    "priority": 2,
    "kit": "gov-pro-04"
   }
  ]
 },
 {
  "id": "soc2",
  "title": "SOC 2 preparation",
  "shortTitle": "SOC 2 preparation",
  "tagline": "Make your evidence useful before the examination.",
  "type": "Readiness screening",
  "minutes": "4 to 6",
  "limitation": "12 original preparation prompts. Not a Trust Services Criteria catalogue, CPA examination, attestation or SOC 2 compliance percentage.",
  "source": {
   "label": "AICPA SOC resources",
   "url": "https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services"
  },
  "areas": [
   "Boundary",
   "Operation",
   "Evidence",
   "Review"
  ],
  "questions": [
   {
    "code": "SB1",
    "area": "Boundary",
    "title": "Are the service and system boundary clearly described?",
    "check": "Clarify the product, supporting people, processes, technology and dependencies.",
    "action": "Draft a concise system boundary and review it with service owners.",
    "priority": 3,
    "kit": "soc-tpl-01"
   },
   {
    "code": "SB2",
    "area": "Boundary",
    "title": "Are customer commitments translated into responsibilities?",
    "check": "Use actual agreements and service commitments rather than generic promises.",
    "action": "Map material commitments to owners and controls.",
    "priority": 2,
    "kit": "soc-tpl-01"
   },
   {
    "code": "SB3",
    "area": "Boundary",
    "title": "Have examination scope and timing been discussed with a CPA firm?",
    "check": "Readiness planning should reflect the intended examination and period.",
    "action": "Confirm the intended scope and period with an appropriately qualified CPA firm.",
    "priority": 2,
    "kit": "soc-tpl-01"
   },
   {
    "code": "SO1",
    "area": "Operation",
    "title": "Are access approvals and removals consistently recorded?",
    "check": "Sample recent changes and reconcile records to the services in scope.",
    "action": "Create a traceable access-change workflow.",
    "priority": 3,
    "kit": "gov-pro-09"
   },
   {
    "code": "SO2",
    "area": "Operation",
    "title": "Are production changes reviewed and attributable?",
    "check": "Trace a release from request to review, deployment and rollback planning.",
    "action": "Record change approvals and deployment evidence.",
    "priority": 2,
    "kit": "gov-pro-09"
   },
   {
    "code": "SO3",
    "area": "Operation",
    "title": "Are incidents, vulnerabilities and vendor issues followed through?",
    "check": "Look for responsibility and closure rather than an open-ticket count.",
    "action": "Define follow-through and escalation for exceptions.",
    "priority": 2,
    "kit": "gov-pro-09"
   },
   {
    "code": "SE1",
    "area": "Evidence",
    "title": "Can you retrieve evidence for the relevant time period?",
    "check": "A current screenshot may not support historical operation.",
    "action": "Define evidence cadence and retention for the intended period.",
    "priority": 3,
    "kit": "soc-reg-02"
   },
   {
    "code": "SE2",
    "area": "Evidence",
    "title": "Do evidence references identify their scope and source?",
    "check": "Include relevant system, owner, collection date and interpretation.",
    "action": "Create an evidence index with source and period metadata.",
    "priority": 2,
    "kit": "soc-reg-02"
   },
   {
    "code": "SE3",
    "area": "Evidence",
    "title": "Are sensitive records shared through an approved channel?",
    "check": "Avoid a public folder or unrestricted email attachment workflow.",
    "action": "Approve the evidence-sharing channel and access owners.",
    "priority": 2,
    "kit": "soc-reg-02"
   },
   {
    "code": "SR1",
    "area": "Review",
    "title": "Are control owners reviewing exceptions?",
    "check": "Identify who decides what happens when a control did not operate.",
    "action": "Review exceptions and retain disposition decisions.",
    "priority": 2,
    "kit": "soc-gde-01"
   },
   {
    "code": "SR2",
    "area": "Review",
    "title": "Has management reviewed the proposed system description?",
    "check": "Confirm it describes the real service and its actual boundaries.",
    "action": "Review the description with technical and business owners.",
    "priority": 2,
    "kit": "soc-gde-01"
   },
   {
    "code": "SR3",
    "area": "Review",
    "title": "Are open readiness gaps prioritized before the examination?",
    "check": "Confirm owners, dependencies and realistic target dates.",
    "action": "Agree a readiness plan without guaranteeing an audit outcome.",
    "priority": 2,
    "kit": "soc-gde-01"
   }
  ]
 },
 {
  "id": "cloud",
  "title": "Cloud & identity",
  "shortTitle": "Cloud & identity",
  "tagline": "Follow permissions, exposure and recovery.",
  "type": "Technical self-check",
  "minutes": "4 to 6",
  "limitation": "12 vendor-neutral screening prompts, informed by cloud security principles. No account connection, live scan or cloud certification.",
  "source": {
   "label": "AWS Well-Architected security pillar",
   "url": "https://docs.aws.amazon.com/wellarchitected/latest/framework/sec-design.html"
  },
  "areas": [
   "Identity",
   "Exposure",
   "Visibility",
   "Resilience"
  ],
  "questions": [
   {
    "code": "CI1",
    "area": "Identity",
    "title": "Are privileged identities protected with strong authentication?",
    "check": "Include root/emergency access and recovery methods.",
    "action": "Protect privileged identities and test the emergency-access procedure.",
    "priority": 3,
    "kit": "gov-pol-06"
   },
   {
    "code": "CI2",
    "area": "Identity",
    "title": "Are workload permissions limited to their actual purpose?",
    "check": "Review an example service account and its real permission boundary.",
    "action": "Replace broad permissions with reviewed workload-specific access.",
    "priority": 3,
    "kit": "gov-pol-06"
   },
   {
    "code": "CI3",
    "area": "Identity",
    "title": "Are long-lived secrets managed and rotated?",
    "check": "Check ownership, storage, expiry and a tested rotation route.",
    "action": "Move secrets out of code and define revocation/rotation ownership.",
    "priority": 2,
    "kit": "gov-pol-06"
   },
   {
    "code": "CE1",
    "area": "Exposure",
    "title": "Is internet-facing exposure intentionally approved?",
    "check": "Include storage, management endpoints and overly broad ingress.",
    "action": "Inventory public entry points and document the reason for each.",
    "priority": 3,
    "kit": "gov-pro-11"
   },
   {
    "code": "CE2",
    "area": "Exposure",
    "title": "Are trust boundaries represented in the architecture?",
    "check": "Trace user, service, administrative and data flows.",
    "action": "Create an architecture diagram with explicit trust boundaries.",
    "priority": 2,
    "kit": "gov-pro-11"
   },
   {
    "code": "CE3",
    "area": "Exposure",
    "title": "Are risky configuration changes detected or reviewed?",
    "check": "Check both preventive checks and a path for approved exceptions.",
    "action": "Introduce configuration review and exception handling.",
    "priority": 2,
    "kit": "gov-pro-11"
   },
   {
    "code": "CV1",
    "area": "Visibility",
    "title": "Are administrative events retained in a protected location?",
    "check": "Check what an administrator could delete or alter.",
    "action": "Protect audit records and define retention and reviewers.",
    "priority": 2,
    "kit": "gov-pro-14"
   },
   {
    "code": "CV2",
    "area": "Visibility",
    "title": "Can alerts be tied back to an accountable service owner?",
    "check": "Look for context, ownership and a response route.",
    "action": "Connect alert routing to the service inventory.",
    "priority": 2,
    "kit": "gov-pro-14"
   },
   {
    "code": "CV3",
    "area": "Visibility",
    "title": "Have logging gaps been exercised safely?",
    "check": "Check a harmless event through collection, alert and response.",
    "action": "Test the end-to-end logging path.",
    "priority": 2,
    "kit": "gov-pro-14"
   },
   {
    "code": "CR1",
    "area": "Resilience",
    "title": "Can important data be recovered after account compromise?",
    "check": "Consider isolation of backups and identity dependencies.",
    "action": "Exercise a recovery path with compromise in the scenario.",
    "priority": 3,
    "kit": "gov-pro-13"
   },
   {
    "code": "CR2",
    "area": "Resilience",
    "title": "Are infrastructure changes reproducible and reversible?",
    "check": "Inspect a change with a rollback or rebuild plan.",
    "action": "Record configuration and a practical recovery/rollback process.",
    "priority": 2,
    "kit": "gov-pro-13"
   },
   {
    "code": "CR3",
    "area": "Resilience",
    "title": "Are cloud responsibilities assigned between providers and your team?",
    "check": "Service models differ; identify what your organization still operates.",
    "action": "Document the shared-responsibility boundary for critical services.",
    "priority": 2,
    "kit": "gov-pro-13"
   }
  ]
 },
 {
  "id": "ai",
  "title": "AI & agent security",
  "shortTitle": "AI & agent security",
  "tagline": "Review what the agent can do, not just what it says.",
  "type": "Technical self-check",
  "minutes": "4 to 6",
  "limitation": "12 original prompts for AI-enabled applications. No model testing, certification, exhaustive OWASP mapping or legal applicability determination.",
  "source": {
   "label": "NIST AI Risk Management Framework",
   "url": "https://genai.owasp.org/llm-top-10/"
  },
  "areas": [
   "Purpose",
   "Data",
   "Authority",
   "Evaluation"
  ],
  "questions": [
   {
    "code": "AP1",
    "area": "Purpose",
    "title": "Is each AI use case inventoried with an accountable owner?",
    "check": "Include embedded assistants and unofficial tools used in workflows.",
    "action": "Record AI uses, owners and business purpose.",
    "priority": 2,
    "kit": "ai-pol-02"
   },
   {
    "code": "AP2",
    "area": "Purpose",
    "title": "Are high-impact uses identified before deployment?",
    "check": "Consider decisions affecting money, access, people or critical operations.",
    "action": "Identify high-impact actions and set approval boundaries.",
    "priority": 3,
    "kit": "ai-pol-02"
   },
   {
    "code": "AP3",
    "area": "Purpose",
    "title": "Are acceptable uses and prohibited inputs documented?",
    "check": "Instructions should match the data and tools staff actually use.",
    "action": "Define and communicate an AI-use policy.",
    "priority": 2,
    "kit": "ai-pol-02"
   },
   {
    "code": "AD1",
    "area": "Data",
    "title": "Are sensitive inputs limited to approved systems and purposes?",
    "check": "Trace prompts, retrieved content, logs and provider retention settings.",
    "action": "Review AI data flows and allowed input classes.",
    "priority": 3,
    "kit": "ai-pro-01"
   },
   {
    "code": "AD2",
    "area": "Data",
    "title": "Does retrieval enforce the requesting user’s access?",
    "check": "A model instruction cannot replace authorization on the retrieved source.",
    "action": "Test retrieval boundaries for distinct authorized test roles.",
    "priority": 3,
    "kit": "ai-pro-01"
   },
   {
    "code": "AD3",
    "area": "Data",
    "title": "Can you remove or correct retained AI data where required?",
    "check": "Identify logs, indexes, caches and provider retention dependencies.",
    "action": "Document retention/deletion responsibilities and test a scoped case.",
    "priority": 2,
    "kit": "ai-pro-01"
   },
   {
    "code": "AA1",
    "area": "Authority",
    "title": "Are tool actions authorized outside the model?",
    "check": "Check the service receiving the action, not only the system prompt.",
    "action": "Enforce per-action authorization at the downstream service.",
    "priority": 3,
    "kit": "ai-pol-01"
   },
   {
    "code": "AA2",
    "area": "Authority",
    "title": "Do consequential actions require specific, reviewable approval?",
    "check": "Approval should be tied to the exact action, subject and scope.",
    "action": "Bind user approval to the proposed action and prevent replay.",
    "priority": 3,
    "kit": "ai-pol-01"
   },
   {
    "code": "AA3",
    "area": "Authority",
    "title": "Can agent credentials be revoked quickly?",
    "check": "Check scopes, lifetimes and incident revocation procedures.",
    "action": "Minimize token scope and rehearse revocation.",
    "priority": 2,
    "kit": "ai-pol-01"
   },
   {
    "code": "AE1",
    "area": "Evaluation",
    "title": "Have untrusted-content and instruction-injection cases been tested?",
    "check": "Use synthetic data and record expected and observed actions.",
    "action": "Build negative-case tests for input and tool boundaries.",
    "priority": 2,
    "kit": "ai-pro-01"
   },
   {
    "code": "AE2",
    "area": "Evaluation",
    "title": "Are failures logged without unnecessarily retaining sensitive content?",
    "check": "Prefer appropriate event context over raw prompt dumps.",
    "action": "Define a minimal, protected AI event log.",
    "priority": 2,
    "kit": "ai-pro-01"
   },
   {
    "code": "AE3",
    "area": "Evaluation",
    "title": "Is there a release decision and monitoring owner?",
    "check": "A promising demonstration is not production acceptance.",
    "action": "Define acceptance criteria, rollback and ongoing review ownership.",
    "priority": 2,
    "kit": "ai-pro-01"
   }
  ]
 },
 {
  "id": "response",
  "title": "SOC & incident readiness",
  "shortTitle": "SOC & incident readiness",
  "tagline": "Know who acts when a signal becomes an incident.",
  "type": "Operations self-check",
  "minutes": "4 to 6",
  "limitation": "12 original operational screening prompts. Does not measure incident-response effectiveness or establish 24/7 operational coverage.",
  "source": {
   "label": "NIST incident handling guidance",
   "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final"
  },
  "areas": [
   "Signals",
   "Triage",
   "Response",
   "Learning"
  ],
  "questions": [
   {
    "code": "DS1",
    "area": "Signals",
    "title": "Are priority threats linked to the logs you collect?",
    "check": "Review which business risks your detection use cases address.",
    "action": "Map a short list of priority threats to necessary data sources.",
    "priority": 2,
    "kit": "gov-pro-14"
   },
   {
    "code": "DS2",
    "area": "Signals",
    "title": "Can you detect missing or stale log sources?",
    "check": "A quiet dashboard can mean no data rather than no threats.",
    "action": "Add source-health and data-freshness checks.",
    "priority": 3,
    "kit": "gov-pro-14"
   },
   {
    "code": "DS3",
    "area": "Signals",
    "title": "Are alerting rules tested against expected signals?",
    "check": "Record the test case, expected event and observed result.",
    "action": "Create a safe detection-validation plan.",
    "priority": 2,
    "kit": "gov-pro-14"
   },
   {
    "code": "DT1",
    "area": "Triage",
    "title": "Does every alert queue have an accountable reviewer?",
    "check": "Coverage should reflect actual staffing and on-call arrangements.",
    "action": "Assign triage ownership and make coverage limits explicit.",
    "priority": 3,
    "kit": "gov-pro-07"
   },
   {
    "code": "DT2",
    "area": "Triage",
    "title": "Are severity and escalation criteria understood?",
    "check": "Check how a business-critical event reaches a decision-maker.",
    "action": "Document severity criteria and escalation contacts.",
    "priority": 2,
    "kit": "gov-pro-07"
   },
   {
    "code": "DT3",
    "area": "Triage",
    "title": "Can analysts retrieve asset and identity context?",
    "check": "Identify the owner and purpose of a system implicated in an alert.",
    "action": "Connect triage to current asset and identity records.",
    "priority": 2,
    "kit": "gov-pro-07"
   },
   {
    "code": "DR1",
    "area": "Response",
    "title": "Are containment decisions authorized and documented?",
    "check": "Know who can disable accounts, isolate hosts or pause services.",
    "action": "Define response authority before an incident.",
    "priority": 3,
    "kit": "gov-pro-07"
   },
   {
    "code": "DR2",
    "area": "Response",
    "title": "Are investigation records preserved with appropriate access?",
    "check": "Include source, timestamps, handling and retention.",
    "action": "Define evidence-handling and access procedures.",
    "priority": 2,
    "kit": "gov-pro-07"
   },
   {
    "code": "DR3",
    "area": "Response",
    "title": "Are communication responsibilities and external obligations reviewed?",
    "check": "Bring legal, privacy, business and technical owners into planning.",
    "action": "Review communications and applicable notification duties with qualified owners.",
    "priority": 2,
    "kit": "gov-pro-07"
   },
   {
    "code": "DL1",
    "area": "Learning",
    "title": "Has a realistic tabletop exposed decision gaps?",
    "check": "Use a fictional scenario and record decision points and follow-up.",
    "action": "Run a tabletop focused on responsibility and dependencies.",
    "priority": 2,
    "kit": "gov-tpl-11"
   },
   {
    "code": "DL2",
    "area": "Learning",
    "title": "Are post-incident improvements assigned and tracked?",
    "check": "Review whether lessons turned into verified changes.",
    "action": "Create an improvement register with owners and validation.",
    "priority": 2,
    "kit": "gov-tpl-11"
   },
   {
    "code": "DL3",
    "area": "Learning",
    "title": "Do service owners participate in recovery validation?",
    "check": "Validate business function, not only whether a server restarts.",
    "action": "Include business acceptance in recovery exercises.",
    "priority": 2,
    "kit": "gov-tpl-11"
   }
  ]
 },
 {
  "id": "essentials",
  "title": "Small business security",
  "shortTitle": "Small business security",
  "tagline": "Start with accounts, devices, information and recovery.",
  "type": "Business self-check",
  "minutes": "4 to 6",
  "limitation": "12 original screening prompts for a small organization. Not a CIS audit, an insurance eligibility decision or a measure of attack coverage.",
  "source": {
   "label": "NIST small-business resources",
   "url": "https://www.cisa.gov/secure-our-world"
  },
  "areas": [
   "Accounts",
   "Devices",
   "Information",
   "Recovery"
  ],
  "questions": [
   {
    "code": "BA1",
    "area": "Accounts",
    "title": "Does each person have a separate work account?",
    "check": "Check shared accounts, administrator access and who can remove access.",
    "action": "Replace shared everyday logins where possible and assign account owners.",
    "priority": 3,
    "kit": "gov-pol-06"
   },
   {
    "code": "BA2",
    "area": "Accounts",
    "title": "Is strong multifactor authentication used on important accounts?",
    "check": "Start with email, administration, finance and remote access. Prefer phishing-resistant methods where supported.",
    "action": "Enable strong MFA on priority accounts and protect recovery methods.",
    "priority": 3,
    "kit": "gov-pol-06"
   },
   {
    "code": "BA3",
    "area": "Accounts",
    "title": "Are passwords unique and stored in an approved password manager?",
    "check": "Do not collect or paste actual passwords. Review the process and account coverage.",
    "action": "Adopt a password manager and replace reused work passwords.",
    "priority": 2,
    "kit": "gov-pol-06"
   },
   {
    "code": "BD1",
    "area": "Devices",
    "title": "Are work devices and software inventoried?",
    "check": "Include personal devices allowed to access work information and hosted services.",
    "action": "List work devices, software and their support owners.",
    "priority": 2,
    "kit": "gov-chk-02"
   },
   {
    "code": "BD2",
    "area": "Devices",
    "title": "Are supported systems updated within an agreed timeframe?",
    "check": "Check recent examples and how urgent security updates are handled.",
    "action": "Assign patch ownership and replace unsupported software.",
    "priority": 3,
    "kit": "gov-chk-02"
   },
   {
    "code": "BD3",
    "area": "Devices",
    "title": "Are lost devices protected and removable from work access?",
    "check": "Review encryption, screen locks and the process for revoking a lost device.",
    "action": "Enable appropriate device protections and rehearse access removal.",
    "priority": 2,
    "kit": "gov-chk-02"
   },
   {
    "code": "BI1",
    "area": "Information",
    "title": "Can staff recognize and report suspicious messages?",
    "check": "Ask how an unexpected payment request or login link is verified.",
    "action": "Provide a simple reporting route and practise a safe phishing example.",
    "priority": 3,
    "kit": "gov-pro-16"
   },
   {
    "code": "BI2",
    "area": "Information",
    "title": "Is sensitive information shared only with intended people?",
    "check": "Review public links, shared folders and unnecessary external access.",
    "action": "Review sharing settings and remove unnecessary access.",
    "priority": 2,
    "kit": "gov-pro-16"
   },
   {
    "code": "BI3",
    "area": "Information",
    "title": "Are supplier and former-worker accounts reviewed?",
    "check": "Consider the access still needed after a contract or role changes.",
    "action": "Review third-party access and document offboarding.",
    "priority": 2,
    "kit": "gov-pro-16"
   },
   {
    "code": "BR1",
    "area": "Recovery",
    "title": "Are important records backed up independently of the primary account?",
    "check": "Consider what happens if the everyday administrator account is compromised.",
    "action": "Protect an independent recovery copy and restrict its administration.",
    "priority": 3,
    "kit": "gov-pro-12"
   },
   {
    "code": "BR2",
    "area": "Recovery",
    "title": "Has someone successfully restored an important record?",
    "check": "Record what was restored, when and whether it was usable.",
    "action": "Run a small, authorized restore test and document the result.",
    "priority": 3,
    "kit": "gov-pro-12"
   },
   {
    "code": "BR3",
    "area": "Recovery",
    "title": "Does everyone know who to contact during a suspected incident?",
    "check": "Contacts must remain available when email or the primary device is unavailable.",
    "action": "Maintain an offline incident contact and decision checklist.",
    "priority": 2,
    "kit": "gov-pro-12"
   }
  ]
 },
 {
  "id": "api",
  "title": "Web & API release readiness",
  "shortTitle": "Web & API release readiness",
  "tagline": "Review access boundaries, inputs, delivery and operating visibility.",
  "type": "Engineering self-check",
  "minutes": "5 to 7",
  "limitation": "12 original pre-release screening questions. Not the complete OWASP API Top 10, ASVS or WSTG, and not a performed penetration test.",
  "source": {
   "label": "OWASP API Security Project",
   "url": "https://owasp.org/API-Security/editions/2023/en/0x11-t10/"
  },
  "areas": [
   "Identity",
   "Data",
   "Delivery",
   "Visibility"
  ],
  "questions": [
   {
    "code": "WI1",
    "area": "Identity",
    "title": "Is permission checked for each requested object and action?",
    "check": "Compare expected access for distinct users, tenants and privileged roles.",
    "action": "Plan positive and negative authorization tests for key operations.",
    "priority": 3,
    "kit": "gov-pol-06"
   },
   {
    "code": "WI2",
    "area": "Identity",
    "title": "Are session and token lifecycle decisions defined?",
    "check": "Separate logout, expiry, role changes and emergency revocation.",
    "action": "Document intended authority changes and test representative lifecycle cases.",
    "priority": 3,
    "kit": "gov-pol-06"
   },
   {
    "code": "WI3",
    "area": "Identity",
    "title": "Do recovery and enrollment flows receive security review?",
    "check": "Include password reset, MFA recovery and invitations.",
    "action": "Review recovery flows alongside the main sign-in path.",
    "priority": 2,
    "kit": "gov-pol-06"
   },
   {
    "code": "WD1",
    "area": "Data",
    "title": "Are accepted inputs and writable fields explicitly defined?",
    "check": "Check server-side validation, unexpected fields and property-level authorization.",
    "action": "Define input schemas and test unauthorized field updates.",
    "priority": 3,
    "kit": "gov-pro-20"
   },
   {
    "code": "WD2",
    "area": "Data",
    "title": "Are returned fields limited to what the caller may see?",
    "check": "Compare output for different roles and remove unnecessary sensitive properties.",
    "action": "Review response schemas and field-level disclosure.",
    "priority": 2,
    "kit": "gov-pro-20"
   },
   {
    "code": "WD3",
    "area": "Data",
    "title": "Are backend fetches and third-party responses bounded?",
    "check": "Review destination restrictions, redirects, timeouts, size limits and response validation.",
    "action": "Constrain outbound requests and validate external responses.",
    "priority": 3,
    "kit": "gov-pro-20"
   },
   {
    "code": "WR1",
    "area": "Delivery",
    "title": "Are all deployed API versions and environments inventoried?",
    "check": "Include old endpoints, staging systems and undocumented integrations.",
    "action": "Maintain an endpoint inventory and retirement plan.",
    "priority": 2,
    "kit": "gov-pro-09"
   },
   {
    "code": "WR2",
    "area": "Delivery",
    "title": "Are secrets kept out of source, client bundles and logs?",
    "check": "Use synthetic samples for review. Trace credential storage and rotation.",
    "action": "Review secret handling and rotate any confirmed exposed credentials.",
    "priority": 3,
    "kit": "gov-pro-09"
   },
   {
    "code": "WR3",
    "area": "Delivery",
    "title": "Are dependency and configuration changes reviewed before release?",
    "check": "Record the version, relevant advisories and approved deployment settings.",
    "action": "Add dependency and configuration review to the release checklist.",
    "priority": 2,
    "kit": "gov-pro-09"
   },
   {
    "code": "WV1",
    "area": "Visibility",
    "title": "Are resource usage and high-value workflows rate-limited?",
    "check": "Consider expensive operations, account recovery and business-sensitive actions.",
    "action": "Set limits and test predictable failure behavior under authorized conditions.",
    "priority": 2,
    "kit": "gov-pro-14"
   },
   {
    "code": "WV2",
    "area": "Visibility",
    "title": "Are authorization failures and abuse signals recorded appropriately?",
    "check": "Avoid recording raw tokens, personal records or complete request bodies unnecessarily.",
    "action": "Define actionable security events and appropriate retention.",
    "priority": 2,
    "kit": "gov-pro-14"
   },
   {
    "code": "WV3",
    "area": "Visibility",
    "title": "Is there a scoped retest and rollback decision?",
    "check": "A successful deployment is not evidence that a security fix worked.",
    "action": "Record representative retest cases, release acceptance and rollback ownership.",
    "priority": 2,
    "kit": "gov-pro-14"
   }
  ]
 },
 {
  "id": "vendor",
  "title": "Supplier security review",
  "shortTitle": "Supplier security review",
  "tagline": "Turn a supplier questionnaire into a scoped decision.",
  "type": "Assurance self-check",
  "minutes": "4 to 6",
  "limitation": "12 original supplier review prompts. No vendor certification, contract approval or complete supply-chain assessment is implied.",
  "source": {
   "label": "NIST supply-chain risk guidance",
   "url": "https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final"
  },
  "areas": [
   "Scope",
   "Access",
   "Evidence",
   "Continuity"
  ],
  "questions": [
   {
    "code": "VS1",
    "area": "Scope",
    "title": "Is the service boundary and business owner identified?",
    "check": "Record the actual product, contracting entity and intended use.",
    "action": "Define the supplier service and accountable business owner.",
    "priority": 2,
    "kit": "gov-pro-06"
   },
   {
    "code": "VS2",
    "area": "Scope",
    "title": "Are shared data types and processing locations understood?",
    "check": "Include transfers, integrations and relevant subprocessors.",
    "action": "Map the supplier data flow and unresolved location questions.",
    "priority": 3,
    "kit": "gov-pro-06"
   },
   {
    "code": "VS3",
    "area": "Scope",
    "title": "Is the service impact assessed if it becomes unavailable?",
    "check": "Consider operational dependency rather than only the purchase price.",
    "action": "Assign a criticality rating with a stated business reason.",
    "priority": 2,
    "kit": "gov-pro-06"
   },
   {
    "code": "VA1",
    "area": "Access",
    "title": "Is supplier access limited to the necessary systems and actions?",
    "check": "Review administrator rights, remote access and shared credentials.",
    "action": "Minimize supplier access and identify its approving owner.",
    "priority": 3,
    "kit": "gov-pro-10"
   },
   {
    "code": "VA2",
    "area": "Access",
    "title": "Are authentication and access reviews part of the arrangement?",
    "check": "Check MFA, privileged access and review responsibilities.",
    "action": "Agree access controls and a periodic review process.",
    "priority": 2,
    "kit": "gov-pro-10"
   },
   {
    "code": "VA3",
    "area": "Access",
    "title": "Can access be revoked at contract end or during an incident?",
    "check": "Cover API credentials, accounts, integrations and delegated access.",
    "action": "Document termination and emergency revocation steps.",
    "priority": 3,
    "kit": "gov-pro-10"
   },
   {
    "code": "VE1",
    "area": "Evidence",
    "title": "Does supplied assurance evidence cover the relevant service and period?",
    "check": "Check scope, exclusions, dates and the difference between readiness and independent assurance.",
    "action": "Map each assurance statement to the evidence that supports it.",
    "priority": 3,
    "kit": "gov-pro-06"
   },
   {
    "code": "VE2",
    "area": "Evidence",
    "title": "Are unresolved answers tracked with owners and decisions?",
    "check": "Do not convert an unanswered question into an affirmative control statement.",
    "action": "Maintain a supplier gap register with decision owners.",
    "priority": 2,
    "kit": "gov-pro-06"
   },
   {
    "code": "VE3",
    "area": "Evidence",
    "title": "Are incident and change notification responsibilities understood?",
    "check": "Contractual and legal duties need qualified review in the relevant context.",
    "action": "Review notification routes, responsibilities and contractual commitments.",
    "priority": 2,
    "kit": "gov-pro-06"
   },
   {
    "code": "VC1",
    "area": "Continuity",
    "title": "Has a recovery capability relevant to this service been reviewed?",
    "check": "Review evidence of tests and dependencies rather than relying only on a written policy.",
    "action": "Request appropriate recovery evidence and record remaining uncertainty.",
    "priority": 2,
    "kit": "gov-pro-13"
   },
   {
    "code": "VC2",
    "area": "Continuity",
    "title": "Can your data be returned or deleted when the relationship ends?",
    "check": "Check usable formats, timing, retained backups and deletion responsibilities.",
    "action": "Agree an exit and data-handling plan.",
    "priority": 2,
    "kit": "gov-pro-13"
   },
   {
    "code": "VC3",
    "area": "Continuity",
    "title": "Is a reassessment triggered by material changes?",
    "check": "Examples include a new data category, incident or major service change.",
    "action": "Define review dates and event-based reassessment triggers.",
    "priority": 2,
    "kit": "gov-pro-13"
   }
  ]
 },
 {
  "id": "recovery",
  "title": "Backup & recovery readiness",
  "shortTitle": "Backup & recovery readiness",
  "tagline": "Check whether recovery expectations match tested capability.",
  "type": "Resilience self-check",
  "minutes": "4 to 6",
  "limitation": "12 original resilience screening questions. Not a complete business continuity audit, disaster recovery test or guarantee of restoration.",
  "source": {
   "label": "NIST contingency planning guidance",
   "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final"
  },
  "areas": [
   "Priorities",
   "Copies",
   "Restoration",
   "Coordination"
  ],
  "questions": [
   {
    "code": "BP1",
    "area": "Priorities",
    "title": "Have business owners identified the services that must recover first?",
    "check": "Include dependencies such as identity, networking, data and external suppliers.",
    "action": "Create a recovery priority list with business owners.",
    "priority": 3,
    "kit": "gov-pro-13"
   },
   {
    "code": "BP2",
    "area": "Priorities",
    "title": "Are acceptable downtime and data-loss targets defined?",
    "check": "Recovery time and recovery point objectives are targets, not automatically achieved capabilities.",
    "action": "Agree service-specific recovery time and recovery point objectives.",
    "priority": 2,
    "kit": "gov-pro-13"
   },
   {
    "code": "BP3",
    "area": "Priorities",
    "title": "Do recovery plans cover key configuration and identity systems?",
    "check": "Restoring files may not restore the service that uses them.",
    "action": "List required configurations, keys, accounts and dependencies.",
    "priority": 2,
    "kit": "gov-pro-13"
   },
   {
    "code": "BC1",
    "area": "Copies",
    "title": "Are backup jobs and failures actively checked?",
    "check": "A configured schedule does not show that a usable copy exists.",
    "action": "Assign backup monitoring and failure follow-up.",
    "priority": 3,
    "kit": "gov-pro-12"
   },
   {
    "code": "BC2",
    "area": "Copies",
    "title": "Are recovery copies protected from the primary administrator compromise?",
    "check": "Review separate credentials, deletion controls and appropriate isolation.",
    "action": "Protect backup access and deletion boundaries.",
    "priority": 3,
    "kit": "gov-pro-12"
   },
   {
    "code": "BC3",
    "area": "Copies",
    "title": "Are backup encryption and key-recovery arrangements understood?",
    "check": "An encrypted backup is unusable if its required key is unavailable.",
    "action": "Document protected key access and recovery responsibilities.",
    "priority": 2,
    "kit": "gov-pro-12"
   },
   {
    "code": "BT1",
    "area": "Restoration",
    "title": "Has a representative restore been completed recently?",
    "check": "Record the source, time, target, dependencies and observed result.",
    "action": "Run an authorized restore exercise and retain its findings.",
    "priority": 3,
    "kit": "gov-pro-12"
   },
   {
    "code": "BT2",
    "area": "Restoration",
    "title": "Does a service owner check usability after restoration?",
    "check": "Verify important business transactions and data consistency.",
    "action": "Define business acceptance tests for a restored service.",
    "priority": 2,
    "kit": "gov-pro-12"
   },
   {
    "code": "BT3",
    "area": "Restoration",
    "title": "Are recovery-time measurements compared with agreed targets?",
    "check": "Separate measured exercise results from planning assumptions.",
    "action": "Record actual recovery times and any required improvements.",
    "priority": 2,
    "kit": "gov-pro-12"
   },
   {
    "code": "BO1",
    "area": "Coordination",
    "title": "Can the team access the recovery runbook during an outage?",
    "check": "Do not depend entirely on the system that may be unavailable.",
    "action": "Maintain a protected alternative copy of contacts and recovery instructions.",
    "priority": 2,
    "kit": "gov-pro-07"
   },
   {
    "code": "BO2",
    "area": "Coordination",
    "title": "Are authority and communication routes rehearsed?",
    "check": "Know who can authorize restoration, temporary service restrictions and public updates.",
    "action": "Rehearse recovery decisions in a fictional tabletop.",
    "priority": 2,
    "kit": "gov-pro-07"
   },
   {
    "code": "BO3",
    "area": "Coordination",
    "title": "Are lessons and system changes reflected in the plan?",
    "check": "Follow up on failed tests and changed infrastructure.",
    "action": "Assign improvements and update the next exercise scope.",
    "priority": 2,
    "kit": "gov-pro-07"
   }
  ]
 },
 {
  "id": "delivery",
  "title": "Secure software delivery",
  "shortTitle": "Secure software delivery",
  "tagline": "Connect design, dependencies, releases and remediation.",
  "type": "Engineering readiness",
  "minutes": "5 to 7",
  "limitation": "12 original software-delivery prompts. Not a source-code review, penetration test, supplier attestation or complete implementation of the NIST SSDF.",
  "source": {
   "label": "OWASP secure software development",
   "url": "https://csrc.nist.gov/projects/ssdf"
  },
  "areas": [
   "Design",
   "Build",
   "Release",
   "Response"
  ],
  "questions": [
   {
    "code": "SD1",
    "area": "Design",
    "title": "Are important trust boundaries recorded before implementation?",
    "check": "Choose one workflow and identify actors, services, data stores and changes in trust.",
    "action": "Create a lightweight threat model with owners for open assumptions.",
    "priority": 3,
    "kit": "gov-chk-02"
   },
   {
    "code": "SD2",
    "area": "Design",
    "title": "Are authentication and authorization decisions specified separately?",
    "check": "Document both who an actor is and what that actor may do to each object or operation.",
    "action": "Add role, object and negative authorization cases to the design.",
    "priority": 2,
    "kit": "gov-chk-02"
   },
   {
    "code": "SD3",
    "area": "Design",
    "title": "Are security requirements tied to misuse or failure cases?",
    "check": "Look for testable behavior rather than broad statements such as secure by design.",
    "action": "Write specific deny, failure and recovery acceptance criteria.",
    "priority": 2,
    "kit": "gov-chk-02"
   },
   {
    "code": "SB4",
    "area": "Build",
    "title": "Are source changes reviewed before they reach a protected branch?",
    "check": "Review current branch controls, reviewer expectations and emergency paths.",
    "action": "Define review and protected-branch rules for the scoped repository.",
    "priority": 3,
    "kit": "gov-pro-11"
   },
   {
    "code": "SB5",
    "area": "Build",
    "title": "Are third-party components inventoried with accountable owners?",
    "check": "Include direct, transitive, build and runtime dependencies for the release.",
    "action": "Create a release-specific dependency inventory and review owner.",
    "priority": 2,
    "kit": "gov-pro-11"
   },
   {
    "code": "SB6",
    "area": "Build",
    "title": "Are build credentials and artifacts protected from ordinary developer access?",
    "check": "Inspect signing, publishing, secret scope and artifact provenance boundaries.",
    "action": "Reduce build credential scope and document artifact integrity checks.",
    "priority": 2,
    "kit": "gov-pro-11"
   },
   {
    "code": "SR4",
    "area": "Release",
    "title": "Do release checks cover high-risk security behavior?",
    "check": "Use synthetic negative cases for permissions, session lifecycle, input handling and logging.",
    "action": "Add a bounded security release gate with recorded outcomes.",
    "priority": 3,
    "kit": "gov-pro-09"
   },
   {
    "code": "SR5",
    "area": "Release",
    "title": "Can the deployed version be connected to reviewed source and dependencies?",
    "check": "Check identifiers, manifests and immutable artifact references.",
    "action": "Record a traceable release manifest and approved exception route.",
    "priority": 2,
    "kit": "gov-pro-09"
   },
   {
    "code": "SR6",
    "area": "Release",
    "title": "Are rollback and feature-disable decisions rehearsed?",
    "check": "Confirm authority, dependencies, data compatibility and communication.",
    "action": "Run a safe release-recovery exercise and retain the decision record.",
    "priority": 2,
    "kit": "gov-pro-09"
   },
   {
    "code": "SX1",
    "area": "Response",
    "title": "Can a reported weakness reach the right engineering owner?",
    "check": "Review the intake route, triage authority and acknowledgement expectations.",
    "action": "Publish a vulnerability intake and escalation route.",
    "priority": 3,
    "kit": "gov-pro-07"
   },
   {
    "code": "SX2",
    "area": "Response",
    "title": "Are remediation priorities based on context as well as a severity label?",
    "check": "Consider exploit conditions, reachability, business role and compensating controls.",
    "action": "Record a contextual remediation rationale and target date.",
    "priority": 2,
    "kit": "gov-pro-07"
   },
   {
    "code": "SX3",
    "area": "Response",
    "title": "Does retesting verify the failed control and affected variants?",
    "check": "A closed ticket or changed line is not evidence that the boundary now holds.",
    "action": "Define positive, negative and regression retest cases.",
    "priority": 2,
    "kit": "gov-pro-07"
   }
  ]
 },
 {
  "id": "identity",
  "title": "Identity & privileged access",
  "shortTitle": "Identity & privileged access",
  "tagline": "Trace authority from approval through revocation.",
  "type": "Identity readiness",
  "minutes": "5 to 7",
  "limitation": "12 original identity-governance prompts. Not an identity-provider scan, zero-trust certification or complete NIST digital-identity assessment.",
  "source": {
   "label": "NIST digital identity guidance",
   "url": "https://csrc.nist.gov/pubs/sp/800/63/4/final"
  },
  "areas": [
   "Inventory",
   "Authentication",
   "Privilege",
   "Lifecycle"
  ],
  "questions": [
   {
    "code": "II1",
    "area": "Inventory",
    "title": "Are human, service and emergency identities owned?",
    "check": "Include accounts outside the central directory and non-human credentials.",
    "action": "Build a scoped identity inventory with accountable owners.",
    "priority": 3,
    "kit": "gov-pro-16"
   },
   {
    "code": "II2",
    "area": "Inventory",
    "title": "Can important permissions be explained in business terms?",
    "check": "Trace a sample role or group to approved responsibilities and systems.",
    "action": "Map high-impact permissions to purpose and approver.",
    "priority": 2,
    "kit": "gov-pro-16"
   },
   {
    "code": "II3",
    "area": "Inventory",
    "title": "Are unmanaged or shared accounts identified?",
    "check": "Look for accounts without an individual or system owner and an approved use case.",
    "action": "Remove, replace or explicitly govern unmanaged identities.",
    "priority": 2,
    "kit": "gov-pro-16"
   },
   {
    "code": "IA1",
    "area": "Authentication",
    "title": "Is phishing-resistant authentication prioritized for high-impact access?",
    "check": "Review administrators, remote access, recovery and sensitive workflows.",
    "action": "Plan stronger authenticators for the highest-impact access paths.",
    "priority": 3,
    "kit": "gov-pol-06"
   },
   {
    "code": "IA2",
    "area": "Authentication",
    "title": "Are account-recovery paths at least as well protected as sign-in?",
    "check": "Inspect help-desk, fallback and device-replacement paths.",
    "action": "Test and strengthen recovery identity checks.",
    "priority": 2,
    "kit": "gov-pol-06"
   },
   {
    "code": "IA3",
    "area": "Authentication",
    "title": "Are session lifetime and reauthentication decisions explicit?",
    "check": "Consider sensitive actions, idle time, device loss and authority changes.",
    "action": "Define and test session renewal and termination behavior.",
    "priority": 2,
    "kit": "gov-pol-06"
   },
   {
    "code": "IP1",
    "area": "Privilege",
    "title": "Is privileged access separate from routine work?",
    "check": "Check administrator accounts, workstations, approval and monitoring.",
    "action": "Separate routine and privileged identities with bounded use.",
    "priority": 3,
    "kit": "gov-pro-10"
   },
   {
    "code": "IP2",
    "area": "Privilege",
    "title": "Are temporary privileges time-bounded and reviewed?",
    "check": "Inspect activation, expiry, extension and emergency access records.",
    "action": "Introduce expiring privilege with named approval.",
    "priority": 2,
    "kit": "gov-pro-10"
   },
   {
    "code": "IP3",
    "area": "Privilege",
    "title": "Can consequential service identities act beyond their purpose?",
    "check": "Review workload roles, tokens, secrets and downstream authorization.",
    "action": "Reduce service authority and add downstream policy checks.",
    "priority": 2,
    "kit": "gov-pro-10"
   },
   {
    "code": "IL1",
    "area": "Lifecycle",
    "title": "Are joiner, mover and leaver changes linked to authoritative events?",
    "check": "Sample timing, exceptions and systems outside automation.",
    "action": "Assign owners for lifecycle events and exception follow-up.",
    "priority": 3,
    "kit": "gov-pro-10"
   },
   {
    "code": "IL2",
    "area": "Lifecycle",
    "title": "Does revocation end active authority as intended?",
    "check": "Test sessions, refresh tokens, API keys and cached access in a controlled case.",
    "action": "Run a scoped revocation test and record remaining access.",
    "priority": 2,
    "kit": "gov-pro-10"
   },
   {
    "code": "IL3",
    "area": "Lifecycle",
    "title": "Are access reviews focused on meaningful decisions?",
    "check": "Reviewers need context, conflicts and an effective removal path.",
    "action": "Provide role context and verify a removal from review to enforcement.",
    "priority": 2,
    "kit": "gov-pro-10"
   }
  ]
 },
 {
  "id": "mobile",
  "title": "Mobile release readiness",
  "shortTitle": "Mobile release readiness",
  "tagline": "Review the application, API and device boundary together.",
  "type": "Release readiness",
  "minutes": "5 to 7",
  "limitation": "12 original mobile-release prompts. Not an OWASP MAS checklist, source review, device test or app-store approval.",
  "source": {
   "label": "OWASP Mobile Security Project",
   "url": "https://mas.owasp.org/"
  },
  "areas": [
   "Data",
   "Platform",
   "API",
   "Release"
  ],
  "questions": [
   {
    "code": "MD1",
    "area": "Data",
    "title": "Is sensitive data minimized on the device?",
    "check": "Trace cached records, logs, screenshots, notifications and backups.",
    "action": "Remove unnecessary device data and document remaining retention.",
    "priority": 3,
    "kit": "gov-pro-20"
   },
   {
    "code": "MD2",
    "area": "Data",
    "title": "Are secrets excluded from the application package and logs?",
    "check": "Inspect build configuration and a representative release artifact in an authorized environment.",
    "action": "Move secrets to appropriate server-side or protected mechanisms.",
    "priority": 2,
    "kit": "gov-pro-20"
   },
   {
    "code": "MD3",
    "area": "Data",
    "title": "Are local data protections matched to realistic device threats?",
    "check": "Consider lock state, backup, shared storage and rooted-device assumptions.",
    "action": "Document and test the local protection boundary.",
    "priority": 2,
    "kit": "gov-pro-20"
   },
   {
    "code": "MP1",
    "area": "Platform",
    "title": "Are exported components and deep links intentionally exposed?",
    "check": "Review handlers, intent filters, URL schemes and caller validation.",
    "action": "Restrict component exposure and test untrusted invocation.",
    "priority": 3,
    "kit": "gov-chk-02"
   },
   {
    "code": "MP2",
    "area": "Platform",
    "title": "Are platform permissions limited to the feature need?",
    "check": "Compare requested permissions with active functionality and user explanations.",
    "action": "Remove unused permissions and justify sensitive access.",
    "priority": 2,
    "kit": "gov-chk-02"
   },
   {
    "code": "MP3",
    "area": "Platform",
    "title": "Does the application fail safely when platform trust changes?",
    "check": "Review certificate, device-integrity and dependency assumptions without treating them as authorization.",
    "action": "Define safe fallback and server-side enforcement.",
    "priority": 2,
    "kit": "gov-chk-02"
   },
   {
    "code": "MA1",
    "area": "API",
    "title": "Does the server enforce object and function permission for every mobile role?",
    "check": "A mobile interface restriction does not protect an API operation.",
    "action": "Add server-side positive and negative authorization tests.",
    "priority": 3,
    "kit": "gov-pro-11"
   },
   {
    "code": "MA2",
    "area": "API",
    "title": "Can tokens and sessions be revoked after logout or device loss?",
    "check": "Test refresh behavior and protected actions after the event.",
    "action": "Define and test mobile session termination conditions.",
    "priority": 2,
    "kit": "gov-pro-11"
   },
   {
    "code": "MA3",
    "area": "API",
    "title": "Are transport and certificate decisions deployable without unsafe bypasses?",
    "check": "Review debug exceptions, proxies, certificate changes and recovery.",
    "action": "Remove release bypasses and document certificate-change handling.",
    "priority": 2,
    "kit": "gov-pro-11"
   },
   {
    "code": "MR1",
    "area": "Release",
    "title": "Are debug features and test endpoints excluded from release builds?",
    "check": "Use reproducible release configuration and artifact inspection.",
    "action": "Add release checks for flags, endpoints and diagnostic data.",
    "priority": 3,
    "kit": "gov-pro-09"
   },
   {
    "code": "MR2",
    "area": "Release",
    "title": "Can a vulnerable mobile version be contained or retired?",
    "check": "Consider forced update, server compatibility and customer communication.",
    "action": "Define version support and emergency containment decisions.",
    "priority": 2,
    "kit": "gov-pro-09"
   },
   {
    "code": "MR3",
    "area": "Release",
    "title": "Are privacy and security claims consistent with actual behavior?",
    "check": "Compare notices, permissions, SDKs and observed data flows.",
    "action": "Reconcile public claims with the reviewed release behavior.",
    "priority": 2,
    "kit": "gov-pro-09"
   }
  ]
 },
 {
  "id": "privacy",
  "title": "Data protection operations",
  "shortTitle": "Data protection operations",
  "tagline": "Turn data promises into owned, testable work.",
  "type": "Privacy operations",
  "minutes": "5 to 7",
  "limitation": "12 original operational prompts. Not legal advice, a regulatory opinion, a privacy impact assessment or complete NIST Privacy Framework profile.",
  "source": {
   "label": "GDPR text and EDPB guidance",
   "url": "https://www.nist.gov/privacy-framework"
  },
  "areas": [
   "Purpose",
   "Inventory",
   "Rights",
   "Incidents"
  ],
  "questions": [
   {
    "code": "DP1",
    "area": "Purpose",
    "title": "Is each sensitive-data use connected to a defined purpose and owner?",
    "check": "Choose a workflow and compare collection with the decision it supports.",
    "action": "Record the purpose, owner and data minimization decision.",
    "priority": 3,
    "kit": "gdpr-reg-01"
   },
   {
    "code": "DP2",
    "area": "Purpose",
    "title": "Are high-impact automated decisions reviewed for people and context?",
    "check": "Consider inputs, error, contestability and human responsibility.",
    "action": "Define review and escalation for consequential decisions.",
    "priority": 2,
    "kit": "gdpr-reg-01"
   },
   {
    "code": "DP3",
    "area": "Purpose",
    "title": "Are new uses or disclosures reviewed before launch?",
    "check": "Include analytics, AI features, vendors and cross-border dependencies.",
    "action": "Add a change trigger and accountable review.",
    "priority": 2,
    "kit": "gdpr-reg-01"
   },
   {
    "code": "DI1",
    "area": "Inventory",
    "title": "Can the organization trace important personal data across systems and suppliers?",
    "check": "Follow collection, transformation, sharing, retention and deletion.",
    "action": "Build a scoped data-flow and dependency inventory.",
    "priority": 3,
    "kit": "pims-reg-01"
   },
   {
    "code": "DI2",
    "area": "Inventory",
    "title": "Are retention rules implemented rather than only documented?",
    "check": "Inspect deletion jobs, archives, backups, exceptions and evidence.",
    "action": "Test one retention rule from source through deletion evidence.",
    "priority": 2,
    "kit": "pims-reg-01"
   },
   {
    "code": "DI3",
    "area": "Inventory",
    "title": "Are test and analytics datasets governed like their source data?",
    "check": "Review copied, masked, synthetic and exported datasets.",
    "action": "Reduce or protect non-production personal data.",
    "priority": 2,
    "kit": "pims-reg-01"
   },
   {
    "code": "DR1",
    "area": "Rights",
    "title": "Can a verified request reach all relevant systems?",
    "check": "Trace identity checks, search, exceptions, deadlines and approval.",
    "action": "Run a synthetic request and record coverage gaps.",
    "priority": 3,
    "kit": "pims-pro-03"
   },
   {
    "code": "DR2",
    "area": "Rights",
    "title": "Are correction and deletion decisions consistently recorded?",
    "check": "Review ownership, downstream propagation and lawful exceptions with qualified advice.",
    "action": "Create a decision record and downstream follow-up.",
    "priority": 2,
    "kit": "pims-pro-03"
   },
   {
    "code": "DR3",
    "area": "Rights",
    "title": "Can people understand the important use without reading internal architecture?",
    "check": "Compare actual behavior with notices and consent choices.",
    "action": "Rewrite unclear explanations and validate the user path.",
    "priority": 2,
    "kit": "pims-pro-03"
   },
   {
    "code": "DN1",
    "area": "Incidents",
    "title": "Can an incident team determine whose data may be affected?",
    "check": "Check inventory, logs, vendor records and decision authority.",
    "action": "Add privacy facts and roles to incident triage.",
    "priority": 3,
    "kit": "pims-pro-04"
   },
   {
    "code": "DN2",
    "area": "Incidents",
    "title": "Are notification decisions evidence-linked and reviewed?",
    "check": "Record facts, uncertainty, applicable advice and timing without guessing obligations.",
    "action": "Create an incident decision timeline with qualified review.",
    "priority": 2,
    "kit": "pims-pro-04"
   },
   {
    "code": "DN3",
    "area": "Incidents",
    "title": "Do exercises include customer, employee and supplier data scenarios?",
    "check": "Test dependencies, communication and follow-up ownership.",
    "action": "Run a fictional privacy incident tabletop and assign actions.",
    "priority": 2,
    "kit": "pims-pro-04"
   }
  ]
 },
 {
  "id": "culture",
  "title": "Security culture & role readiness",
  "shortTitle": "Security culture & role readiness",
  "tagline": "Measure whether people can make the needed decision.",
  "type": "People readiness",
  "minutes": "5 to 7",
  "limitation": "12 original people-readiness prompts. Not an employee-performance rating, psychometric measure, certification or proof of reduced incident likelihood.",
  "source": {
   "label": "NIST security awareness guidance",
   "url": "https://www.cisa.gov/resources-tools/resources/cybersecurity-awareness-program-toolkit"
  },
  "areas": [
   "Roles",
   "Learning",
   "Practice",
   "Feedback"
  ],
  "questions": [
   {
    "code": "CR1",
    "area": "Roles",
    "title": "Do people know the security decisions expected in their role?",
    "check": "Use concrete actions for engineers, managers, support staff and leaders.",
    "action": "Define role-specific security decisions and escalation routes.",
    "priority": 3,
    "kit": "gov-pol-01"
   },
   {
    "code": "CR2",
    "area": "Roles",
    "title": "Can managers explain who accepts risk and exceptions?",
    "check": "Review a recent exception or deferred action.",
    "action": "Document risk and exception authority.",
    "priority": 2,
    "kit": "gov-pol-01"
   },
   {
    "code": "CR3",
    "area": "Roles",
    "title": "Are security responsibilities included when roles change?",
    "check": "Check onboarding, promotion, contractor and supplier transitions.",
    "action": "Add role-change security briefings and ownership.",
    "priority": 2,
    "kit": "gov-pol-01"
   },
   {
    "code": "CL1",
    "area": "Learning",
    "title": "Does training use scenarios people actually encounter?",
    "check": "Compare exercises with access, data, engineering and incident decisions.",
    "action": "Replace generic content with role-relevant practice.",
    "priority": 3,
    "kit": "gov-pro-08"
   },
   {
    "code": "CL2",
    "area": "Learning",
    "title": "Can participants explain why an answer is safer?",
    "check": "Completion alone does not establish transferable judgment.",
    "action": "Add rationale, reflection and a follow-up task.",
    "priority": 2,
    "kit": "gov-pro-08"
   },
   {
    "code": "CL3",
    "area": "Learning",
    "title": "Are accessibility, language and time constraints addressed?",
    "check": "Review delivery formats and the ability to ask for help.",
    "action": "Adapt training access and provide alternative formats.",
    "priority": 2,
    "kit": "gov-pro-08"
   },
   {
    "code": "CP1",
    "area": "Practice",
    "title": "Do teams rehearse ambiguous situations without harming real systems?",
    "check": "Use synthetic evidence, clear boundaries and safe injects.",
    "action": "Schedule a bounded scenario with a facilitator and observers.",
    "priority": 3,
    "kit": "gov-pro-08"
   },
   {
    "code": "CP2",
    "area": "Practice",
    "title": "Are technical and executive decisions exercised together?",
    "check": "Trace containment, service impact, communication and risk ownership.",
    "action": "Include cross-functional decision points in the next exercise.",
    "priority": 2,
    "kit": "gov-pro-08"
   },
   {
    "code": "CP3",
    "area": "Practice",
    "title": "Does each exercise end with owned improvements?",
    "check": "Look for due dates, dependencies and a later validation step.",
    "action": "Maintain an after-action register and retest plan.",
    "priority": 2,
    "kit": "gov-pro-08"
   },
   {
    "code": "CF1",
    "area": "Feedback",
    "title": "Can people report mistakes and suspicious activity without fear or delay?",
    "check": "Inspect reporting routes, acknowledgement and learning culture.",
    "action": "Clarify safe reporting and timely feedback.",
    "priority": 3,
    "kit": "gov-pro-04"
   },
   {
    "code": "CF2",
    "area": "Feedback",
    "title": "Are training needs informed by incidents and control changes?",
    "check": "Use trends carefully; do not expose or rank individuals.",
    "action": "Translate lessons into targeted role-based practice.",
    "priority": 2,
    "kit": "gov-pro-04"
   },
   {
    "code": "CF3",
    "area": "Feedback",
    "title": "Is programme success measured beyond attendance and clicks?",
    "check": "Consider decision quality, response time, unresolved barriers and retest outcomes.",
    "action": "Choose outcome measures with privacy and interpretation limits.",
    "priority": 2,
    "kit": "gov-pro-04"
   }
  ]
 }
];
