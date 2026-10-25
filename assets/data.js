/* Original ABZSECURE readiness prompts. No licensed standards text or private app data.
   Each prompt links to a remediation document in the open GRC Documentation Kit.
   Fields: code, area, title (the prompt), evidence (what proves it), action (what to do),
   owner (the role), kit (GRC kit document id for remediation). */
window.SCHEMA_VERSION = "abz-readiness-v2";
window.QUESTIONNAIRE_VERSION = "2026-10-26";
window.KIT_BASE = "https://abdullahzarshaid.github.io/grc-documentation-kit/kit.html#";
const q = (code, area, title, evidence, action, owner, kit) => ({code, area, title, evidence, action, owner, kit});
window.TRACKS = [
  {
    id: "security-basics", title: "Security fundamentals", shortTitle: "Security fundamentals",
    audience: "A practical starting point for a small business or product team.",
    description: "Identify the everyday security practices that deserve a closer look before choosing a formal framework.",
    limitation: "Original security discussion prompts, not a complete control set, technical test, risk assessment or prediction of a breach.",
    source: {label: "NIST small-business resources", url: "https://www.nist.gov/itl/smallbusinesscyber"},
    questions: [
      q("BAS-01","Context & ownership","Is someone accountable for security decisions and the systems in scope?","A named owner and a dated system/service boundary.","Name the accountable owner and document the systems covered by this review.","Business owner","gov-pol-01"),
      q("BAS-02","Context & ownership","Can you identify the devices, accounts, services and important data the business relies on?","A maintained inventory with service and data owners.","Start an inventory and confirm who updates it when services change.","IT owner","gov-pro-16"),
      q("BAS-03","Context & ownership","Are sensitive data access, sharing and retention expectations defined?","Data-handling rules tied to actual services and business needs.","Identify sensitive data flows and document who may share and retain them.","Data owner","gov-pro-16"),
      q("BAS-04","Identity & people","Is strong multi-factor authentication applied to important accounts?","Account settings and coverage exceptions, not a policy alone.","Review important accounts, enable suitable MFA and record exceptions.","IT owner","gov-pol-06"),
      q("BAS-05","Identity & people","Are joiners, role changes and leavers handled through a reviewed access process?","Recent access changes and a periodic access review.","Assign an access-review owner and verify a small authorized sample.","Access owner","gov-pro-10"),
      q("BAS-06","Identity & people","Do people know how to recognize and report a suspicious request?","Awareness material and a usable reporting route.","Publish a reporting contact and check staff understand the route.","People lead","gov-pro-08"),
      q("BAS-07","Secure operations","Are supported software, updates and configuration responsibilities managed?","A software inventory, update records and exception owners.","Identify unsupported or overdue software and assign remediation decisions.","IT owner","gov-pro-11"),
      q("BAS-08","Secure operations","Are important production changes reviewed and recoverable?","Recent change approvals, rollback steps and deployment records.","Agree review and rollback checks for high-impact changes.","Engineering lead","gov-pro-09"),
      q("BAS-09","Secure operations","Are important security events recorded and reviewed by an owner?","Logging settings, a recent review and an escalation route.","Choose relevant events, confirm retention and assign a review owner.","Security owner","gov-pro-14"),
      q("BAS-10","Recovery & dependencies","Have backups for important data been restored successfully in a controlled test?","A recent restoration record showing what was recovered.","Run an authorized restore rehearsal and record the result and limitations.","Recovery owner","gov-pro-12"),
      q("BAS-11","Recovery & dependencies","Is there a usable incident contact and response plan?","Named contacts, decision responsibilities and a practice exercise.","Define who acts first, who makes decisions and how the team communicates.","Incident owner","gov-pro-07"),
      q("BAS-12","Recovery & dependencies","Are critical suppliers and their access reviewed?","A supplier list, access boundaries and review decisions.","Prioritize critical suppliers and review their access and business dependency.","Supplier owner","gov-pro-06")
    ]
  },
  {
    id: "nist-csf", title: "NIST CSF 2.0 readiness", shortTitle: "NIST CSF 2.0",
    audience: "Teams organising their security programme around the Cybersecurity Framework.",
    description: "Explore the six CSF 2.0 functions, Govern, Identify, Protect, Detect, Respond and Recover, through original prompts.",
    limitation: "Original prompts informed by the NIST Cybersecurity Framework 2.0 functions, not the full framework, a profile, a tier rating or an assessment result. Use the framework itself for authoritative outcomes.",
    source: {label: "NIST Cybersecurity Framework 2.0", url: "https://www.nist.gov/cyberframework"},
    questions: [
      q("CSF-01","Govern","Is your organisational context and risk strategy understood and used to set security priorities?","A recorded context, risk strategy and priorities approved by leadership.","Agree what the business must protect and how much risk it will accept.","Executive sponsor","gov-pol-01"),
      q("CSF-02","Govern","Are security roles, responsibilities and authorities assigned and communicated?","Named roles, authorities and an escalation route.","Document who owns, operates and oversees each part of the programme.","Governance owner","gov-pol-01"),
      q("CSF-03","Govern","Is there an approved security policy, reviewed on a cycle and acknowledged by staff?","An approved policy, its review date and staff acknowledgements.","Issue a top-level policy and confirm staff have seen and accepted it.","Security owner","gov-pol-03"),
      q("CSF-04","Govern","Does leadership oversee the risk management strategy and review performance?","Management review records and decisions.","Put security on a regular leadership agenda with recorded decisions.","Executive sponsor","gov-pro-03"),
      q("CSF-05","Identify","Do you maintain an inventory of assets, data and their owners?","A maintained inventory with owners and criticality.","Build and keep an inventory of systems, data and devices.","Asset owner","gov-pro-16"),
      q("CSF-06","Identify","Do you identify, analyse and record risks to your objectives in a register?","A risk register with scoring, owners and review dates.","Assess your main risks consistently and record them.","Risk owner","gov-pro-05"),
      q("CSF-07","Identify","Are supplier and supply-chain risks assessed and managed?","A supplier register with tiering, assurance and review.","Assess the security of vendors that handle your data or systems.","Supplier owner","gov-pro-06"),
      q("CSF-08","Identify","Do you capture lessons from incidents and audits and act on them?","A corrective-action register with verified closure.","Turn findings and incidents into tracked improvements.","Improvement owner","gov-pro-04"),
      q("CSF-09","Protect","Are identities and access managed with least privilege and periodic review?","Access requests, least-privilege decisions and review records.","Grant access by role and review it on a cycle.","Access owner","gov-pro-10"),
      q("CSF-10","Protect","Do staff receive role-appropriate awareness and training?","Training records and phishing-exercise results.","Train staff on their responsibilities and test awareness.","People lead","gov-pro-08"),
      q("CSF-11","Protect","Is data protected in transit and at rest with managed cryptography?","Encryption settings and a key inventory.","Encrypt data in transit and at rest and manage the keys.","Security owner","gov-pro-20"),
      q("CSF-12","Protect","Are systems configured to a secure baseline and changes controlled?","Baseline checklists and change records.","Harden systems to a baseline and control changes.","Engineering lead","gov-chk-02"),
      q("CSF-13","Detect","Are systems monitored continuously for anomalies and events?","Monitoring coverage and a recent review.","Monitor systems and alert on anomalies.","Security owner","gov-pro-14"),
      q("CSF-14","Detect","Are detected events analysed to decide whether they are incidents?","Triage records and severity decisions.","Define how events are triaged into incidents.","Incident owner","gov-pro-07"),
      q("CSF-15","Detect","Do you scan for vulnerabilities and track them to remediation?","A vulnerability register with SLAs and closure.","Scan on a schedule and remediate within set timeframes.","Security owner","gov-pro-11"),
      q("CSF-16","Detect","Are logs retained, protected and reviewed on a cadence?","Log retention settings and review records.","Retain and review security-relevant logs.","Security owner","gov-pro-14"),
      q("CSF-17","Respond","Is there an incident response process that is followed and recorded?","An incident plan and logged incidents.","Adopt an incident process and record what happens.","Incident owner","gov-pro-07"),
      q("CSF-18","Respond","Are incidents triaged by severity and contained promptly?","Severity matrix and containment records.","Classify incidents and contain them quickly.","Incident owner","gov-pro-07"),
      q("CSF-19","Respond","Is incident communication planned, internally and externally?","A communication plan with contacts.","Plan who is told, when and how, during an incident.","Governance owner","gov-pro-07"),
      q("CSF-20","Respond","Do you run a post-incident review and apply the lessons?","Post-incident review records and actions.","Review every significant incident and act on the lessons.","Incident owner","gov-tpl-11"),
      q("CSF-21","Recover","Do you have recovery and continuity plans for disruption?","Continuity and recovery plans with owners.","Prepare and own plans for major disruption.","Recovery owner","gov-pro-13"),
      q("CSF-22","Recover","Are backups verified by restore tests?","Restore-test records.","Test restores, do not assume backups work.","Recovery owner","gov-pro-12"),
      q("CSF-23","Recover","Is recovery communication planned so stakeholders are informed?","A recovery communication plan.","Plan how you keep people informed during recovery.","Governance owner","gov-pro-13"),
      q("CSF-24","Recover","Do you exercise the continuity and recovery plans?","Exercise records and improvements.","Rehearse the plans and improve them.","Recovery owner","gov-pro-13")
    ]
  },
  {
    id: "iso27001", title: "ISO 27001 preparation", shortTitle: "ISO 27001",
    audience: "Teams preparing to define or improve an information security management system.",
    description: "Explore scope, risk decisions, operating practices and the evidence needed for an ISMS readiness conversation.",
    limitation: "Original preparation prompts, not reproduced ISO/IEC 27001 clauses, a complete requirements checklist, an audit or certification. Use the current licensed standard and competent independent review where required.",
    source: {label: "ISO/IEC 27001 overview", url: "https://www.iso.org/standard/27001"},
    questions: [
      q("ISO-01","Scope & leadership","Is the proposed ISMS scope clear about entities, services, locations and boundaries?","A scope statement with explicit inclusions and exclusions.","Draft the boundary and confirm it with responsible stakeholders.","ISMS owner","isms-stm-01"),
      q("ISO-02","Scope & leadership","Has leadership assigned accountability and the resources needed for the security programme?","Named responsibilities, approved objectives and resource decisions.","Record who can approve priorities, accept risk and provide resources.","Executive sponsor","gov-pol-01"),
      q("ISO-03","Scope & leadership","Are relevant stakeholders and business, contractual and regulatory expectations identified?","A maintained obligations/context register with responsible reviewers.","Identify expectations for the scoped service; obtain specialist advice where needed.","Governance owner","isms-pro-01"),
      q("ISO-04","Risk & treatment","Are important information assets and their owners known within the scope?","Asset/data inventory and ownership decisions.","Identify key assets and dependencies before evaluating their risks.","Asset owner","gov-pro-16"),
      q("ISO-05","Risk & treatment","Is a consistent risk-assessment approach used and documented?","Risk criteria, assessment records and a review date.","Agree likelihood, impact and acceptance criteria, then apply them consistently.","Risk owner","gov-pro-05"),
      q("ISO-06","Risk & treatment","Are risk-treatment choices, control decisions and residual risks recorded?","Treatment decisions, responsibility and documented rationale.","Connect each material risk to a treatment, owner and review decision.","Risk owner","gov-pro-05"),
      q("ISO-07","Operating practices","Are policies and working instructions reflected in actual access and handling practices?","Current instructions plus operating examples and exceptions.","Select a small evidence sample to compare documented intent with practice.","Control owner","gov-pro-10"),
      q("ISO-08","Operating practices","Are relevant people prepared to carry out their security responsibilities?","Role expectations, awareness/training records and communication.","Clarify role-specific responsibilities and close relevant knowledge gaps.","People lead","isms-pro-02"),
      q("ISO-09","Operating practices","Are supplier, change and technology risks considered before important decisions?","Supplier/change reviews and resulting actions.","Define proportionate review gates for critical suppliers and changes.","Operations owner","gov-pro-06"),
      q("ISO-10","Review & improvement","Are security objectives and control performance reviewed against evidence?","Measures, review records and decisions on exceptions.","Choose useful measures and record what management does with the results.","ISMS owner","isms-pro-04"),
      q("ISO-11","Review & improvement","Are internal assurance and management reviews planned and followed through?","Review plans, results, management decisions and independence considerations.","Plan competent reviews and assign owners to their resulting actions.","Executive sponsor","gov-pro-02"),
      q("ISO-12","Review & improvement","Are weaknesses and corrective actions tracked to a checked outcome?","A corrective-action register with cause, owner, due date and closure evidence.","Define closure criteria and verify corrective actions instead of just marking them done.","Improvement owner","gov-pro-04")
    ]
  },
  {
    id: "soc2", title: "SOC 2 evidence readiness", shortTitle: "SOC 2",
    audience: "Service organizations preparing for a buyer-assurance or CPA scoping conversation.",
    description: "Check whether the service boundary, operating records and review ownership are ready for a more detailed evidence review.",
    limitation: "Original evidence-readiness prompts, not reproduced AICPA Trust Services Criteria, a complete SOC 2 checklist, an examination or an audit opinion. A qualified independent CPA determines the examination scope and result.",
    source: {label: "AICPA SOC resources", url: "https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services"},
    questions: [
      q("SOC-01","Service & accountability","Is the service boundary clear about systems, data, people and important dependencies?","A system/service description with explicit boundaries.","Agree the service scope before promising a report or control coverage.","Service owner","soc-tpl-01"),
      q("SOC-02","Service & accountability","Are customer commitments and the intended assurance scope understood?","Recorded commitments and questions for the independent CPA.","Collect buyer expectations and discuss an appropriate scope with the assurance provider.","Governance owner","isms-pln-02"),
      q("SOC-03","Service & accountability","Do control owners know what they operate and what records they should retain?","Named owners and a dated evidence responsibility plan.","Assign control responsibilities and the evidence period to be discussed.","Programme owner","soc-reg-01"),
      q("SOC-04","Access & people","Can access approval and removal be traced through operating records?","Authorized joiner, mover and leaver samples.","Review a small permitted sample and track any timing or approval gaps.","Access owner","gov-pro-10"),
      q("SOC-05","Access & people","Are privileged access and authentication settings reviewed?","Privileged-account inventory, MFA coverage and review decisions.","Check important access paths and assign exception owners.","IT owner","gov-pol-06"),
      q("SOC-06","Access & people","Are relevant personnel aware of their security and reporting responsibilities?","Acknowledgements, role preparation and awareness records.","Confirm responsibilities are communicated and supported in practice.","People lead","gov-pro-08"),
      q("SOC-07","Operating evidence","Are software and infrastructure changes reviewed and traceable?","Change records, approvals, deployment evidence and exceptions.","Choose a representative change sample and document missing approvals or records.","Engineering lead","gov-pro-09"),
      q("SOC-08","Operating evidence","Are identified technical weaknesses prioritized and followed up?","A vulnerability/remediation register with review and closure decisions.","Define remediation ownership and check how overdue exceptions are handled.","Security owner","gov-pro-11"),
      q("SOC-09","Operating evidence","Are monitoring and incident activities supported by dated operating records?","Review records, incidents/exercises and follow-up actions.","Select the relevant operating evidence rather than relying only on a policy.","Incident owner","gov-pro-07"),
      q("SOC-10","Evidence & review","Are critical third-party dependencies reviewed against the service commitments?","Supplier review, applicable assurance records and tracked exceptions.","Identify dependencies and review the risks that remain the service organization's responsibility.","Supplier owner","gov-pro-06"),
      q("SOC-11","Evidence & review","Can evidence be identified by source, owner, period and applicable boundary?","An evidence register with dates and links to controlled source material.","Organize evidence provenance and record gaps without uploading sensitive files here.","Evidence owner","soc-reg-02"),
      q("SOC-12","Evidence & review","Are readiness gaps and changes reviewed before communicating assurance claims?","A gap register, management decisions and CPA scoping questions.","Validate external claims and agree the next evidence-review step.","Programme owner","soc-gde-01")
    ]
  },
  {
    id: "gdpr", title: "GDPR readiness", shortTitle: "GDPR",
    audience: "Teams that process personal data through a product or service.",
    description: "Explore the operational obligations of the GDPR: mapping, lawful bases, rights, breaches, transfers and retention.",
    limitation: "Original readiness prompts, not reproduced GDPR text, legal advice, a compliance determination or a certification. Read the regulation and take qualified advice where it matters.",
    source: {label: "GDPR text and EDPB guidance", url: "https://edpb.europa.eu/"},
    questions: [
      q("GDPR-01","Accountability","Do you keep a record of processing activities (a processing inventory)?","A maintained record of processing with purposes and categories.","Build and keep a record of what personal data you process and why.","Privacy owner","pims-reg-01"),
      q("GDPR-02","Lawfulness","Does every processing activity have a recorded lawful basis?","A lawful basis recorded against each activity.","Decide and record the lawful basis for each processing activity.","Privacy owner","gdpr-reg-01"),
      q("GDPR-03","Transparency","Are privacy notices published, current and in clear language?","Published notices covering collection and use.","Publish clear privacy notices and keep them current.","Privacy owner","gdpr-tpl-01"),
      q("GDPR-04","Consent","Where you rely on consent, is it recorded and easy to withdraw?","Consent records and a withdrawal route.","Capture consent and make withdrawal as easy as giving it.","Privacy owner","pims-pro-05"),
      q("GDPR-05","Minimisation","Do you collect and keep only the personal data you need?","Minimisation decisions reflected in the processing record.","Reduce what you collect and keep to what the purpose needs.","Data owner","gdpr-reg-01"),
      q("GDPR-06","Retention","Is there a retention schedule that is applied and checked?","A retention schedule with checks and results.","Set retention periods and check they are applied.","Privacy owner","pims-reg-07"),
      q("GDPR-07","Rights","Can you handle access, correction and erasure requests within a month?","A request process with the one-month clock tracked.","Stand up a rights-request process and track the deadline.","Privacy owner","pims-pro-03"),
      q("GDPR-08","Breach","Can you assess and notify a breach within seventy-two hours of awareness?","A breach procedure and a register, with the clock understood.","Prepare the breach procedure and know the seventy-two hour clock.","Incident owner","pims-pro-04"),
      q("GDPR-09","Assessments","Do you run a data protection impact assessment for high-risk processing?","DPIA screening and completed assessments where required.","Screen for high-risk processing and run a DPIA when needed.","Privacy owner","pims-pro-02"),
      q("GDPR-10","Processors","Are processors engaged under contracts with the required terms?","A processor register and the required contract terms.","Put the required terms in place with every processor.","Procurement owner","pims-tpl-02"),
      q("GDPR-11","Transfers","Are transfers outside the region made under a lawful mechanism?","A transfer register with mechanisms and assessments.","Record transfers and the mechanism that makes each lawful.","Privacy owner","pims-pol-03"),
      q("GDPR-12","Security","Is security of processing appropriate to the risk and tested?","Security measures tied to the processing risk.","Protect personal data in proportion to the risk, and test it.","Security owner","gov-pro-05"),
      q("GDPR-13","Data mapping","Do you know where personal data flows and is stored?","A data-flow map covering sources, stores and recipients.","Map where personal data comes from, lives and goes.","Data owner","gdpr-pro-01"),
      q("GDPR-14","Deletion","Does deletion reach primary storage, backups and logs?","Deletion that covers derived data, backups and logs.","Make sure deletion is complete, not just the front-end record.","Engineering lead","pims-pol-02"),
      q("GDPR-15","Cookies","Do cookie and tracking choices get captured and honoured?","A cookie inventory and a consent mechanism.","Inventory cookies and honour the choices people make.","Privacy owner","gdpr-reg-04"),
      q("GDPR-16","People","Are staff who handle personal data trained and able to report a breach?","Training records and a reporting route.","Train staff on privacy and how to report a breach.","People lead","gdpr-reg-05"),
      q("GDPR-17","Lawfulness","Where you use legitimate interests, is there a balancing assessment?","A legitimate interests assessment on file.","Record a balancing test wherever you rely on legitimate interests.","Privacy owner","gdpr-tpl-07"),
      q("GDPR-18","Governance","Is there a data protection policy and a named owner?","An approved policy and a named privacy owner.","Adopt a data protection policy and name who owns it.","Privacy owner","gdpr-pol-01")
    ]
  },
  {
    id: "hipaa", title: "HIPAA readiness", shortTitle: "HIPAA",
    audience: "A covered entity or business associate handling protected health information.",
    description: "Explore the HIPAA Security, Privacy and Breach Notification Rules through original readiness prompts.",
    limitation: "Original readiness prompts, not reproduced regulatory text, legal advice or a compliance determination. Read 45 CFR Part 164 and take qualified advice where it matters.",
    source: {label: "HHS HIPAA for Professionals", url: "https://www.hhs.gov/hipaa/for-professionals/index.html"},
    questions: [
      q("HIP-01","Administrative","Have you named a security official responsible for the Security Rule?","A named security official.","Name the person responsible for the Security Rule.","Security owner","hipaa-pol-02"),
      q("HIP-02","Administrative","Have you performed the required security risk analysis and acted on it?","A security risk analysis and risk-management decisions.","Run the required risk analysis and manage the risks it finds.","Security owner","hipaa-pro-01"),
      q("HIP-03","Administrative","Do you review access to health data and remove it when roles end?","Access reviews and timely removal records.","Review access to health data and remove leavers promptly.","Access owner","gov-pro-10"),
      q("HIP-04","Administrative","Do workforce members receive security awareness training?","Training records for the workforce.","Train the workforce on protecting health data.","People lead","gov-pro-08"),
      q("HIP-05","Administrative","Do you have backup, disaster recovery and emergency mode plans?","Backup, recovery and emergency plans with tests.","Prepare and test the contingency plans.","Recovery owner","gov-pro-13"),
      q("HIP-06","Administrative","Is there an incident response and reporting process?","An incident process and logged incidents.","Adopt an incident process for health-data events.","Incident owner","gov-pro-07"),
      q("HIP-07","Technical","Does each user have a unique identifier, with emergency access defined?","Unique IDs and an emergency access procedure.","Give each user a unique ID and define emergency access.","IT owner","gov-pro-10"),
      q("HIP-08","Technical","Are audit controls recording activity in systems with health data?","Audit logs in systems holding health data.","Record and review activity in systems with health data.","Security owner","gov-pro-14"),
      q("HIP-09","Technical","Is electronic protected health information encrypted at rest?","Encryption at rest, or a documented alternative.","Encrypt health data at rest, or record the equivalent measure.","Security owner","gov-pro-20"),
      q("HIP-10","Technical","Is health information encrypted in transit?","Encryption in transit, or a documented alternative.","Encrypt health data in transit, or record the equivalent measure.","Security owner","gov-pro-23"),
      q("HIP-11","Physical","Are facilities, workstations and devices physically protected?","Facility and workstation controls.","Protect facilities, workstations and devices physically.","Facilities owner","gov-pro-17"),
      q("HIP-12","Physical","Is media disposed of and re-used so health data cannot be recovered?","Media disposal and re-use records.","Dispose of and wipe media so health data cannot be recovered.","IT owner","gov-pro-16"),
      q("HIP-13","Organisational","Is there a business associate agreement with every vendor handling health data?","Signed business associate agreements.","Put a business associate agreement in place with each such vendor.","Privacy owner","hipaa-tpl-01"),
      q("HIP-14","Breach","Can you assess and notify a breach within the sixty-day limit?","A breach procedure and a register.","Prepare the breach procedure and know the sixty-day limit.","Privacy owner","hipaa-pro-02"),
      q("HIP-15","Privacy","Do you apply the minimum necessary rule and honour individual rights?","Minimum-necessary practice and a rights process.","Limit use to the minimum necessary and honour individual rights.","Privacy owner","hipaa-pol-01"),
      q("HIP-16","Documentation","Do you keep the required documentation and retain it for six years?","Documentation retained for six years.","Keep the required records and retain them for six years.","Security owner","hipaa-pol-02")
    ]
  },
  {
    id: "ai-governance", title: "AI governance readiness", shortTitle: "AI governance",
    audience: "Teams using or building AI features and choosing where to begin governance work.",
    description: "Explore accountability, intended use, evaluation and operational safeguards through original prompts informed by the NIST AI RMF 1.0 functions.",
    limitation: "Original preliminary prompts informed by NIST AI RMF 1.0, not the full framework, a legal applicability decision, an AI certification or model-safety validation. Framework updates and jurisdiction-specific requirements need separate review.",
    source: {label: "NIST AI RMF Core", url: "https://airc.nist.gov/airmf-resources/airmf/5-sec-core/"},
    questions: [
      q("AI-01","Govern","Is an accountable owner assigned to AI use and its risk decisions?","Named ownership, decision authority and escalation responsibilities.","Assign an accountable owner and clarify when a use needs approval.","AI owner","ai-pol-02"),
      q("AI-02","Govern","Are acceptable uses and restricted data practices communicated?","An AI-use policy with data and supplier boundaries.","Define permitted uses and data handling before expanding access.","Governance owner","ai-pol-01"),
      q("AI-03","Govern","Are relevant users and operators prepared to recognize AI limitations?","Role-specific guidance, training and escalation examples.","Explain limitations and the situations that require human judgment.","People lead","ai-pol-01"),
      q("AI-04","Map","Are the AI systems and third-party models in use inventoried?","An inventory of uses, owners, suppliers and versions where known.","Identify material AI uses, including tools adopted outside engineering.","AI owner","ai-reg-01"),
      q("AI-05","Map","Are intended use, affected people and foreseeable misuse considered?","A use-case boundary and documented impact/risk questions.","Describe the purpose, affected groups and prohibited or out-of-scope uses.","Product owner","ai-pol-02"),
      q("AI-06","Map","Are the sources and flows of data into AI services understood?","A data-flow record covering collection, processing and sharing.","Trace sensitive inputs and outputs and resolve unclear supplier handling.","Data owner","ai-pro-01"),
      q("AI-07","Measure","Is evaluation tied to the intended use rather than a generic demonstration?","Documented evaluation cases, criteria, limitations and results.","Agree suitable evaluation criteria and use authorized, non-sensitive test data.","Evaluation owner","ai-pol-02"),
      q("AI-08","Measure","Are abuse, disclosure and tool-permission boundaries considered where relevant?","A threat model and scoped tests for relevant AI-system behavior.","Identify risky authority/data boundaries and scope an authorized technical review.","Security owner","ai-pro-01"),
      q("AI-09","Measure","Are unreliable outputs and affected-user concerns reviewed?","Known limitations, feedback records and investigation outcomes.","Define how unreliable or harmful output is detected, reviewed and escalated.","Product owner","ai-pol-02"),
      q("AI-10","Manage","Is human review proportionate to the consequence of an AI action?","Review gates, authority limits and override/stop procedures.","Set decision boundaries and verify people can intervene when needed.","Operations owner","ai-pol-02"),
      q("AI-11","Manage","Are model, prompt, data and supplier changes reviewed before continued use?","Change reviews, reevaluation decisions and version records.","Identify changes that require reevaluation and assign responsibility.","Change owner","ai-reg-03"),
      q("AI-12","Manage","Is there a process to handle AI-related incidents and reassess risk?","Incident contacts, response procedures and follow-up review.","Extend incident handling to AI-specific failure and data/authority concerns.","Incident owner","ai-pro-03")
    ]
  }
];
