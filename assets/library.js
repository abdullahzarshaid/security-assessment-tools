(()=>{'use strict';
/** Original screening questions. References establish context, not full framework coverage.
 * No provider calls, files, account credentials or customer evidence are collected here. */
const q = (id, area, title, check, action, priority = 2) => ({id,area,title,check,action,priority});
const catalogue = [
 {id:'nist',name:'NIST CSF 2.0',subtitle:'A clearer view of your security programme.',type:'Framework snapshot',minutes:'6 to 8',version:'Original screening pack 1.0 · CSF 2.0 context',source:'https://www.nist.gov/cyberframework',scope:'18 original prompts across the six CSF functions. Selected screening topics, not the complete CSF Core or an official NIST score.',areas:['Govern','Identify','Protect','Detect','Respond','Recover'],questions:[
 q('GV1','Govern','Does security have a named decision-maker?','Look for a current owner, agreed responsibilities and an escalation route.','Name a security decision-maker and document who can accept risk.',3),
 q('GV2','Govern','Are important risks reviewed with business leaders?','Look for a dated risk discussion and assigned next actions.','Schedule a risk review with named actions and decision owners.'),
 q('GV3','Govern','Are critical suppliers included in your security decisions?','Consider access, data handled, service dependency and exit arrangements.','List critical suppliers and establish a proportionate review process.'),
 q('ID1','Identify','Do you know which systems and services matter most?','Check whether your inventory covers externally hosted services as well as devices.','Build a scoped inventory with business owners and critical dependencies.',3),
 q('ID2','Identify','Do you understand where sensitive information flows?','Choose one important workflow and trace collection, access, storage and sharing.','Document the information flow and its main trust boundaries.'),
 q('ID3','Identify','Are vulnerabilities tracked through remediation?','Look for an owner, target date, exception decision and closure check.','Create a remediation register and a process for verifying closure.'),
 q('PR1','Protect','Is stronger authentication enforced on important accounts?','Review administrator access, remote access and recovery paths, not only one application.','Prioritize strong MFA on privileged and externally accessible accounts.',3),
 q('PR2','Protect','Is access removed or changed when roles change?','Inspect recent joiner, mover and leaver records for the systems in scope.','Define access-change owners and test a recent offboarding example.',3),
 q('PR3','Protect','Are baseline configurations and updates maintained?','Look for an approved baseline and evidence of patch or exception handling.','Assign baseline ownership and a risk-based update process.'),
 q('DE1','Detect','Are security-relevant logs available for important services?','Consider identity, administrator actions and critical application events.','Identify necessary logs, retention, access and a collection owner.'),
 q('DE2','Detect','Does someone review and act on security alerts?','An enabled tool is not enough: check triage ownership and an example.','Define triage responsibilities and test a representative alert.',3),
 q('DE3','Detect','Have detection gaps been tested recently?','Use an authorized, harmless test and check the expected signal appears.','Run a scoped detection exercise and record missed signals.'),
 q('RS1','Respond','Can the team find an incident contact and decision process?','Check the plan is available during account or network disruption.','Keep an accessible response contact tree and decision guide.',3),
 q('RS2','Respond','Are containment and evidence-preservation decisions planned?','Identify who can isolate services and who protects investigative records.','Document containment authority and evidence-handling steps.'),
 q('RS3','Respond','Has an incident scenario been rehearsed?','Look for an exercise record, lessons and follow-up owners.','Run a short tabletop and track the resulting improvements.'),
 q('RC1','Recover','Have important backups been restored in a test?','A successful backup job does not establish that the data can be restored.','Test recovery of a scoped critical workload and record the outcome.',3),
 q('RC2','Recover','Are recovery priorities agreed with service owners?','Check dependencies and realistic recovery expectations.','Agree a recovery sequence and validate dependencies.'),
 q('RC3','Recover','Do recovery exercises feed back into the security plan?','Look for documented lessons and completed follow-up work.','Assign owners to recovery lessons and review completion.') ]},
 {id:'iso',name:'ISO 27001 readiness',subtitle:'Start with the management system, not a badge.',type:'Readiness screening',minutes:'4 to 6',version:'Original screening pack 1.0 · ISO/IEC 27001:2022 context',source:'https://www.iso.org/standard/27001',scope:'12 original preparation questions. Does not reproduce ISO clauses or Annex A, determine conformity, or replace a licensed standard and qualified assessment.',areas:['Scope','Risk','Controls','Improvement'],questions:[
 q('IS1','Scope','Is the information-security programme boundary documented?','Name entities, locations, services, dependencies and exclusions.','Write and approve an initial programme scope.',3),
 q('IS2','Scope','Are stakeholder and contractual expectations understood?','Review relevant customer requirements and who evaluates applicability.','Create a requirements register with review ownership.'),
 q('IS3','Scope','Has management assigned resources and responsibilities?','Check actual decision authority, time and responsibilities.','Agree responsibility and resourcing for the scoped programme.'),
 q('IR1','Risk','Is the risk-assessment method consistent and documented?','Different reviewers should understand how likelihood, impact and acceptance are decided.','Define a repeatable risk method and acceptance criteria.'),
 q('IR2','Risk','Do risk treatments have accountable owners?','Trace a risk through treatment, target date and residual-risk decision.','Assign treatments and capture residual-risk decisions.',3),
 q('IR3','Risk','Are control applicability decisions explained?','Check inclusions and exclusions against the real scope and risks.','Prepare a reviewed applicability rationale using the licensed standard.'),
 q('IC1','Controls','Are key policies approved and maintained?','A template alone is not an approved organizational policy.','Assign policy owners and a review/approval cycle.'),
 q('IC2','Controls','Can operating records support your control descriptions?','Check current evidence for access reviews, changes, backups and response.','Map selected control claims to dated operating records.',3),
 q('IC3','Controls','Do people understand their security responsibilities?','Look for role-appropriate instruction and feedback, not only attendance.','Run role-relevant training and record follow-up needs.'),
 q('II1','Improvement','Has the programme been independently challenged internally?','Identify review scope, reviewer objectivity and recorded findings.','Plan an internal audit with suitable objectivity.'),
 q('II2','Improvement','Does management review performance and unresolved risks?','Look for decisions, inputs and follow-up from a management review.','Prepare a management review with explicit decisions.'),
 q('II3','Improvement','Are corrective actions checked for effectiveness?','Closing a ticket is not the same as showing the issue was addressed.','Define and test effectiveness criteria for corrective action.') ]},
 {id:'soc2',name:'SOC 2 preparation',subtitle:'Make your evidence useful before the examination.',type:'Readiness screening',minutes:'4 to 6',version:'Original screening pack 1.0 · SOC 2 preparation',source:'https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services',scope:'12 original preparation prompts. Not a Trust Services Criteria catalogue, CPA examination, attestation or SOC 2 compliance percentage.',areas:['Boundary','Operation','Evidence','Review'],questions:[
 q('SB1','Boundary','Are the service and system boundary clearly described?','Clarify the product, supporting people, processes, technology and dependencies.','Draft a concise system boundary and review it with service owners.',3),
 q('SB2','Boundary','Are customer commitments translated into responsibilities?','Use actual agreements and service commitments rather than generic promises.','Map material commitments to owners and controls.'),
 q('SB3','Boundary','Have examination scope and timing been discussed with a CPA firm?','Readiness planning should reflect the intended examination and period.','Confirm the intended scope and period with an appropriately qualified CPA firm.'),
 q('SO1','Operation','Are access approvals and removals consistently recorded?','Sample recent changes and reconcile records to the services in scope.','Create a traceable access-change workflow.',3),
 q('SO2','Operation','Are production changes reviewed and attributable?','Trace a release from request to review, deployment and rollback planning.','Record change approvals and deployment evidence.'),
 q('SO3','Operation','Are incidents, vulnerabilities and vendor issues followed through?','Look for responsibility and closure rather than an open-ticket count.','Define follow-through and escalation for exceptions.'),
 q('SE1','Evidence','Can you retrieve evidence for the relevant time period?','A current screenshot may not support historical operation.','Define evidence cadence and retention for the intended period.',3),
 q('SE2','Evidence','Do evidence references identify their scope and source?','Include relevant system, owner, collection date and interpretation.','Create an evidence index with source and period metadata.'),
 q('SE3','Evidence','Are sensitive records shared through an approved channel?','Avoid a public folder or unrestricted email attachment workflow.','Approve the evidence-sharing channel and access owners.'),
 q('SR1','Review','Are control owners reviewing exceptions?','Identify who decides what happens when a control did not operate.','Review exceptions and retain disposition decisions.'),
 q('SR2','Review','Has management reviewed the proposed system description?','Confirm it describes the real service and its actual boundaries.','Review the description with technical and business owners.'),
 q('SR3','Review','Are open readiness gaps prioritized before the examination?','Confirm owners, dependencies and realistic target dates.','Agree a readiness plan without guaranteeing an audit outcome.') ]},
 {id:'cloud',name:'Cloud & identity',subtitle:'Follow permissions, exposure and recovery.',type:'Technical self-check',minutes:'4 to 6',version:'Original screening pack 1.0',source:'https://docs.aws.amazon.com/wellarchitected/latest/framework/sec-design.html',scope:'12 vendor-neutral screening prompts, informed by cloud security principles. No account connection, live scan or cloud certification.',areas:['Identity','Exposure','Visibility','Resilience'],questions:[
 q('CI1','Identity','Are privileged identities protected with strong authentication?','Include root/emergency access and recovery methods.','Protect privileged identities and test the emergency-access procedure.',3),
 q('CI2','Identity','Are workload permissions limited to their actual purpose?','Review an example service account and its real permission boundary.','Replace broad permissions with reviewed workload-specific access.',3),
 q('CI3','Identity','Are long-lived secrets managed and rotated?','Check ownership, storage, expiry and a tested rotation route.','Move secrets out of code and define revocation/rotation ownership.'),
 q('CE1','Exposure','Is internet-facing exposure intentionally approved?','Include storage, management endpoints and overly broad ingress.','Inventory public entry points and document the reason for each.',3),
 q('CE2','Exposure','Are trust boundaries represented in the architecture?','Trace user, service, administrative and data flows.','Create an architecture diagram with explicit trust boundaries.'),
 q('CE3','Exposure','Are risky configuration changes detected or reviewed?','Check both preventive checks and a path for approved exceptions.','Introduce configuration review and exception handling.'),
 q('CV1','Visibility','Are administrative events retained in a protected location?','Check what an administrator could delete or alter.','Protect audit records and define retention and reviewers.'),
 q('CV2','Visibility','Can alerts be tied back to an accountable service owner?','Look for context, ownership and a response route.','Connect alert routing to the service inventory.'),
 q('CV3','Visibility','Have logging gaps been exercised safely?','Check a harmless event through collection, alert and response.','Test the end-to-end logging path.'),
 q('CR1','Resilience','Can important data be recovered after account compromise?','Consider isolation of backups and identity dependencies.','Exercise a recovery path with compromise in the scenario.',3),
 q('CR2','Resilience','Are infrastructure changes reproducible and reversible?','Inspect a change with a rollback or rebuild plan.','Record configuration and a practical recovery/rollback process.'),
 q('CR3','Resilience','Are cloud responsibilities assigned between providers and your team?','Service models differ; identify what your organization still operates.','Document the shared-responsibility boundary for critical services.') ]},
 {id:'ai',name:'AI & agent security',subtitle:'Review what the agent can do, not just what it says.',type:'Technical self-check',minutes:'4 to 6',version:'Original screening pack 1.0',source:'https://genai.owasp.org/llm-top-10/',scope:'12 original prompts for AI-enabled applications. No model testing, certification, exhaustive OWASP mapping or legal applicability determination.',areas:['Purpose','Data','Authority','Evaluation'],questions:[
 q('AP1','Purpose','Is each AI use case inventoried with an accountable owner?','Include embedded assistants and unofficial tools used in workflows.','Record AI uses, owners and business purpose.'),
 q('AP2','Purpose','Are high-impact uses identified before deployment?','Consider decisions affecting money, access, people or critical operations.','Identify high-impact actions and set approval boundaries.',3),
 q('AP3','Purpose','Are acceptable uses and prohibited inputs documented?','Instructions should match the data and tools staff actually use.','Define and communicate an AI-use policy.'),
 q('AD1','Data','Are sensitive inputs limited to approved systems and purposes?','Trace prompts, retrieved content, logs and provider retention settings.','Review AI data flows and allowed input classes.',3),
 q('AD2','Data','Does retrieval enforce the requesting user’s access?','A model instruction cannot replace authorization on the retrieved source.','Test retrieval boundaries for distinct authorized test roles.',3),
 q('AD3','Data','Can you remove or correct retained AI data where required?','Identify logs, indexes, caches and provider retention dependencies.','Document retention/deletion responsibilities and test a scoped case.'),
 q('AA1','Authority','Are tool actions authorized outside the model?','Check the service receiving the action, not only the system prompt.','Enforce per-action authorization at the downstream service.',3),
 q('AA2','Authority','Do consequential actions require specific, reviewable approval?','Approval should be tied to the exact action, subject and scope.','Bind user approval to the proposed action and prevent replay.',3),
 q('AA3','Authority','Can agent credentials be revoked quickly?','Check scopes, lifetimes and incident revocation procedures.','Minimize token scope and rehearse revocation.'),
 q('AE1','Evaluation','Have untrusted-content and instruction-injection cases been tested?','Use synthetic data and record expected and observed actions.','Build negative-case tests for input and tool boundaries.'),
 q('AE2','Evaluation','Are failures logged without unnecessarily retaining sensitive content?','Prefer appropriate event context over raw prompt dumps.','Define a minimal, protected AI event log.'),
 q('AE3','Evaluation','Is there a release decision and monitoring owner?','A promising demonstration is not production acceptance.','Define acceptance criteria, rollback and ongoing review ownership.') ]},
 {id:'response',name:'SOC & incident readiness',subtitle:'Know who acts when a signal becomes an incident.',type:'Operations self-check',minutes:'4 to 6',version:'Original screening pack 1.0',source:'https://csrc.nist.gov/pubs/sp/800/61/r3/final',scope:'12 original operational screening prompts. Does not measure incident-response effectiveness or establish 24/7 operational coverage.',areas:['Signals','Triage','Response','Learning'],questions:[
 q('DS1','Signals','Are priority threats linked to the logs you collect?','Review which business risks your detection use cases address.','Map a short list of priority threats to necessary data sources.'),
 q('DS2','Signals','Can you detect missing or stale log sources?','A quiet dashboard can mean no data rather than no threats.','Add source-health and data-freshness checks.',3),
 q('DS3','Signals','Are alerting rules tested against expected signals?','Record the test case, expected event and observed result.','Create a safe detection-validation plan.'),
 q('DT1','Triage','Does every alert queue have an accountable reviewer?','Coverage should reflect actual staffing and on-call arrangements.','Assign triage ownership and make coverage limits explicit.',3),
 q('DT2','Triage','Are severity and escalation criteria understood?','Check how a business-critical event reaches a decision-maker.','Document severity criteria and escalation contacts.'),
 q('DT3','Triage','Can analysts retrieve asset and identity context?','Identify the owner and purpose of a system implicated in an alert.','Connect triage to current asset and identity records.'),
 q('DR1','Response','Are containment decisions authorized and documented?','Know who can disable accounts, isolate hosts or pause services.','Define response authority before an incident.',3),
 q('DR2','Response','Are investigation records preserved with appropriate access?','Include source, timestamps, handling and retention.','Define evidence-handling and access procedures.'),
 q('DR3','Response','Are communication responsibilities and external obligations reviewed?','Bring legal, privacy, business and technical owners into planning.','Review communications and applicable notification duties with qualified owners.'),
 q('DL1','Learning','Has a realistic tabletop exposed decision gaps?','Use a fictional scenario and record decision points and follow-up.','Run a tabletop focused on responsibility and dependencies.'),
 q('DL2','Learning','Are post-incident improvements assigned and tracked?','Review whether lessons turned into verified changes.','Create an improvement register with owners and validation.'),
 q('DL3','Learning','Do service owners participate in recovery validation?','Validate business function, not only whether a server restarts.','Include business acceptance in recovery exercises.') ]}
];
// Additional original screening material. Reference pages provide context, not endorsement.
catalogue.push(
 {id:'essentials',name:'Small business security',subtitle:'Start with accounts, devices, information and recovery.',type:'Business self-check',minutes:'4 to 6',version:'Original screening pack 1.0 | Essentials',source:'https://www.cisa.gov/secure-our-world',scope:'12 original screening prompts for a small organization. Not a CIS audit, an insurance eligibility decision or a measure of attack coverage.',areas:['Accounts','Devices','Information','Recovery'],questions:[
 q('BA1','Accounts','Does each person have a separate work account?','Check shared accounts, administrator access and who can remove access.','Replace shared everyday logins where possible and assign account owners.',3),
 q('BA2','Accounts','Is strong multifactor authentication used on important accounts?','Start with email, administration, finance and remote access. Prefer phishing-resistant methods where supported.','Enable strong MFA on priority accounts and protect recovery methods.',3),
 q('BA3','Accounts','Are passwords unique and stored in an approved password manager?','Do not collect or paste actual passwords. Review the process and account coverage.','Adopt a password manager and replace reused work passwords.'),
 q('BD1','Devices','Are work devices and software inventoried?','Include personal devices allowed to access work information and hosted services.','List work devices, software and their support owners.'),
 q('BD2','Devices','Are supported systems updated within an agreed timeframe?','Check recent examples and how urgent security updates are handled.','Assign patch ownership and replace unsupported software.',3),
 q('BD3','Devices','Are lost devices protected and removable from work access?','Review encryption, screen locks and the process for revoking a lost device.','Enable appropriate device protections and rehearse access removal.'),
 q('BI1','Information','Can staff recognize and report suspicious messages?','Ask how an unexpected payment request or login link is verified.','Provide a simple reporting route and practise a safe phishing example.',3),
 q('BI2','Information','Is sensitive information shared only with intended people?','Review public links, shared folders and unnecessary external access.','Review sharing settings and remove unnecessary access.'),
 q('BI3','Information','Are supplier and former-worker accounts reviewed?','Consider the access still needed after a contract or role changes.','Review third-party access and document offboarding.'),
 q('BR1','Recovery','Are important records backed up independently of the primary account?','Consider what happens if the everyday administrator account is compromised.','Protect an independent recovery copy and restrict its administration.',3),
 q('BR2','Recovery','Has someone successfully restored an important record?','Record what was restored, when and whether it was usable.','Run a small, authorized restore test and document the result.',3),
 q('BR3','Recovery','Does everyone know who to contact during a suspected incident?','Contacts must remain available when email or the primary device is unavailable.','Maintain an offline incident contact and decision checklist.')
 ]},
 {id:'api',name:'Web & API release readiness',subtitle:'Review access boundaries, inputs, delivery and operating visibility.',type:'Engineering self-check',minutes:'5 to 7',version:'Original screening pack 1.0 | API release',source:'https://owasp.org/API-Security/editions/2023/en/0x11-t10/',scope:'12 original pre-release screening questions. Not the complete OWASP API Top 10, ASVS or WSTG, and not a performed penetration test.',areas:['Identity','Data','Delivery','Visibility'],questions:[
 q('WI1','Identity','Is permission checked for each requested object and action?','Compare expected access for distinct users, tenants and privileged roles.','Plan positive and negative authorization tests for key operations.',3),
 q('WI2','Identity','Are session and token lifecycle decisions defined?','Separate logout, expiry, role changes and emergency revocation.','Document intended authority changes and test representative lifecycle cases.',3),
 q('WI3','Identity','Do recovery and enrollment flows receive security review?','Include password reset, MFA recovery and invitations.','Review recovery flows alongside the main sign-in path.'),
 q('WD1','Data','Are accepted inputs and writable fields explicitly defined?','Check server-side validation, unexpected fields and property-level authorization.','Define input schemas and test unauthorized field updates.',3),
 q('WD2','Data','Are returned fields limited to what the caller may see?','Compare output for different roles and remove unnecessary sensitive properties.','Review response schemas and field-level disclosure.'),
 q('WD3','Data','Are backend fetches and third-party responses bounded?','Review destination restrictions, redirects, timeouts, size limits and response validation.','Constrain outbound requests and validate external responses.',3),
 q('WR1','Delivery','Are all deployed API versions and environments inventoried?','Include old endpoints, staging systems and undocumented integrations.','Maintain an endpoint inventory and retirement plan.'),
 q('WR2','Delivery','Are secrets kept out of source, client bundles and logs?','Use synthetic samples for review. Trace credential storage and rotation.','Review secret handling and rotate any confirmed exposed credentials.',3),
 q('WR3','Delivery','Are dependency and configuration changes reviewed before release?','Record the version, relevant advisories and approved deployment settings.','Add dependency and configuration review to the release checklist.'),
 q('WV1','Visibility','Are resource usage and high-value workflows rate-limited?','Consider expensive operations, account recovery and business-sensitive actions.','Set limits and test predictable failure behavior under authorized conditions.'),
 q('WV2','Visibility','Are authorization failures and abuse signals recorded appropriately?','Avoid recording raw tokens, personal records or complete request bodies unnecessarily.','Define actionable security events and appropriate retention.'),
 q('WV3','Visibility','Is there a scoped retest and rollback decision?','A successful deployment is not evidence that a security fix worked.','Record representative retest cases, release acceptance and rollback ownership.')
 ]},
 {id:'vendor',name:'Supplier security review',subtitle:'Turn a supplier questionnaire into a scoped decision.',type:'Assurance self-check',minutes:'4 to 6',version:'Original screening pack 1.0 | Supplier',source:'https://csrc.nist.gov/pubs/sp/800/161/r1/upd1/final',scope:'12 original supplier review prompts. No vendor certification, contract approval or complete supply-chain assessment is implied.',areas:['Scope','Access','Evidence','Continuity'],questions:[
 q('VS1','Scope','Is the service boundary and business owner identified?','Record the actual product, contracting entity and intended use.','Define the supplier service and accountable business owner.'),
 q('VS2','Scope','Are shared data types and processing locations understood?','Include transfers, integrations and relevant subprocessors.','Map the supplier data flow and unresolved location questions.',3),
 q('VS3','Scope','Is the service impact assessed if it becomes unavailable?','Consider operational dependency rather than only the purchase price.','Assign a criticality rating with a stated business reason.'),
 q('VA1','Access','Is supplier access limited to the necessary systems and actions?','Review administrator rights, remote access and shared credentials.','Minimize supplier access and identify its approving owner.',3),
 q('VA2','Access','Are authentication and access reviews part of the arrangement?','Check MFA, privileged access and review responsibilities.','Agree access controls and a periodic review process.'),
 q('VA3','Access','Can access be revoked at contract end or during an incident?','Cover API credentials, accounts, integrations and delegated access.','Document termination and emergency revocation steps.',3),
 q('VE1','Evidence','Does supplied assurance evidence cover the relevant service and period?','Check scope, exclusions, dates and the difference between readiness and independent assurance.','Map each assurance statement to the evidence that supports it.',3),
 q('VE2','Evidence','Are unresolved answers tracked with owners and decisions?','Do not convert an unanswered question into an affirmative control statement.','Maintain a supplier gap register with decision owners.'),
 q('VE3','Evidence','Are incident and change notification responsibilities understood?','Contractual and legal duties need qualified review in the relevant context.','Review notification routes, responsibilities and contractual commitments.'),
 q('VC1','Continuity','Has a recovery capability relevant to this service been reviewed?','Review evidence of tests and dependencies rather than relying only on a written policy.','Request appropriate recovery evidence and record remaining uncertainty.'),
 q('VC2','Continuity','Can your data be returned or deleted when the relationship ends?','Check usable formats, timing, retained backups and deletion responsibilities.','Agree an exit and data-handling plan.'),
 q('VC3','Continuity','Is a reassessment triggered by material changes?','Examples include a new data category, incident or major service change.','Define review dates and event-based reassessment triggers.')
 ]},
 {id:'recovery',name:'Backup & recovery readiness',subtitle:'Check whether recovery expectations match tested capability.',type:'Resilience self-check',minutes:'4 to 6',version:'Original screening pack 1.0 | Recovery',source:'https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final',scope:'12 original resilience screening questions. Not a complete business continuity audit, disaster recovery test or guarantee of restoration.',areas:['Priorities','Copies','Restoration','Coordination'],questions:[
 q('BP1','Priorities','Have business owners identified the services that must recover first?','Include dependencies such as identity, networking, data and external suppliers.','Create a recovery priority list with business owners.',3),
 q('BP2','Priorities','Are acceptable downtime and data-loss targets defined?','Recovery time and recovery point objectives are targets, not automatically achieved capabilities.','Agree service-specific recovery time and recovery point objectives.'),
 q('BP3','Priorities','Do recovery plans cover key configuration and identity systems?','Restoring files may not restore the service that uses them.','List required configurations, keys, accounts and dependencies.'),
 q('BC1','Copies','Are backup jobs and failures actively checked?','A configured schedule does not show that a usable copy exists.','Assign backup monitoring and failure follow-up.',3),
 q('BC2','Copies','Are recovery copies protected from the primary administrator compromise?','Review separate credentials, deletion controls and appropriate isolation.','Protect backup access and deletion boundaries.',3),
 q('BC3','Copies','Are backup encryption and key-recovery arrangements understood?','An encrypted backup is unusable if its required key is unavailable.','Document protected key access and recovery responsibilities.'),
 q('BT1','Restoration','Has a representative restore been completed recently?','Record the source, time, target, dependencies and observed result.','Run an authorized restore exercise and retain its findings.',3),
 q('BT2','Restoration','Does a service owner check usability after restoration?','Verify important business transactions and data consistency.','Define business acceptance tests for a restored service.'),
 q('BT3','Restoration','Are recovery-time measurements compared with agreed targets?','Separate measured exercise results from planning assumptions.','Record actual recovery times and any required improvements.'),
 q('BO1','Coordination','Can the team access the recovery runbook during an outage?','Do not depend entirely on the system that may be unavailable.','Maintain a protected alternative copy of contacts and recovery instructions.'),
 q('BO2','Coordination','Are authority and communication routes rehearsed?','Know who can authorize restoration, temporary service restrictions and public updates.','Rehearse recovery decisions in a fictional tabletop.'),
 q('BO3','Coordination','Are lessons and system changes reflected in the plan?','Follow up on failed tests and changed infrastructure.','Assign improvements and update the next exercise scope.')
 ]}
);

catalogue.push(
 {id:'delivery',name:'Secure software delivery',subtitle:'Connect design, dependencies, releases and remediation.',type:'Engineering readiness',minutes:'5 to 7',version:'Original screening pack 1.0 | Secure delivery',source:'https://csrc.nist.gov/projects/ssdf',scope:'12 original software-delivery prompts. Not a source-code review, penetration test, supplier attestation or complete implementation of the NIST SSDF.',areas:['Design','Build','Release','Response'],questions:[
 q('SD1','Design','Are important trust boundaries recorded before implementation?','Choose one workflow and identify actors, services, data stores and changes in trust.','Create a lightweight threat model with owners for open assumptions.',3),
 q('SD2','Design','Are authentication and authorization decisions specified separately?','Document both who an actor is and what that actor may do to each object or operation.','Add role, object and negative authorization cases to the design.'),
 q('SD3','Design','Are security requirements tied to misuse or failure cases?','Look for testable behavior rather than broad statements such as secure by design.','Write specific deny, failure and recovery acceptance criteria.'),
 q('SB4','Build','Are source changes reviewed before they reach a protected branch?','Review current branch controls, reviewer expectations and emergency paths.','Define review and protected-branch rules for the scoped repository.',3),
 q('SB5','Build','Are third-party components inventoried with accountable owners?','Include direct, transitive, build and runtime dependencies for the release.','Create a release-specific dependency inventory and review owner.'),
 q('SB6','Build','Are build credentials and artifacts protected from ordinary developer access?','Inspect signing, publishing, secret scope and artifact provenance boundaries.','Reduce build credential scope and document artifact integrity checks.'),
 q('SR4','Release','Do release checks cover high-risk security behavior?','Use synthetic negative cases for permissions, session lifecycle, input handling and logging.','Add a bounded security release gate with recorded outcomes.',3),
 q('SR5','Release','Can the deployed version be connected to reviewed source and dependencies?','Check identifiers, manifests and immutable artifact references.','Record a traceable release manifest and approved exception route.'),
 q('SR6','Release','Are rollback and feature-disable decisions rehearsed?','Confirm authority, dependencies, data compatibility and communication.','Run a safe release-recovery exercise and retain the decision record.'),
 q('SX1','Response','Can a reported weakness reach the right engineering owner?','Review the intake route, triage authority and acknowledgement expectations.','Publish a vulnerability intake and escalation route.',3),
 q('SX2','Response','Are remediation priorities based on context as well as a severity label?','Consider exploit conditions, reachability, business role and compensating controls.','Record a contextual remediation rationale and target date.'),
 q('SX3','Response','Does retesting verify the failed control and affected variants?','A closed ticket or changed line is not evidence that the boundary now holds.','Define positive, negative and regression retest cases.')
 ]},
 {id:'identity',name:'Identity & privileged access',subtitle:'Trace authority from approval through revocation.',type:'Identity readiness',minutes:'5 to 7',version:'Original screening pack 1.0 | Identity and privilege',source:'https://csrc.nist.gov/pubs/sp/800/63/4/final',scope:'12 original identity-governance prompts. Not an identity-provider scan, zero-trust certification or complete NIST digital-identity assessment.',areas:['Inventory','Authentication','Privilege','Lifecycle'],questions:[
 q('II1','Inventory','Are human, service and emergency identities owned?','Include accounts outside the central directory and non-human credentials.','Build a scoped identity inventory with accountable owners.',3),
 q('II2','Inventory','Can important permissions be explained in business terms?','Trace a sample role or group to approved responsibilities and systems.','Map high-impact permissions to purpose and approver.'),
 q('II3','Inventory','Are unmanaged or shared accounts identified?','Look for accounts without an individual or system owner and an approved use case.','Remove, replace or explicitly govern unmanaged identities.'),
 q('IA1','Authentication','Is phishing-resistant authentication prioritized for high-impact access?','Review administrators, remote access, recovery and sensitive workflows.','Plan stronger authenticators for the highest-impact access paths.',3),
 q('IA2','Authentication','Are account-recovery paths at least as well protected as sign-in?','Inspect help-desk, fallback and device-replacement paths.','Test and strengthen recovery identity checks.'),
 q('IA3','Authentication','Are session lifetime and reauthentication decisions explicit?','Consider sensitive actions, idle time, device loss and authority changes.','Define and test session renewal and termination behavior.'),
 q('IP1','Privilege','Is privileged access separate from routine work?','Check administrator accounts, workstations, approval and monitoring.','Separate routine and privileged identities with bounded use.',3),
 q('IP2','Privilege','Are temporary privileges time-bounded and reviewed?','Inspect activation, expiry, extension and emergency access records.','Introduce expiring privilege with named approval.'),
 q('IP3','Privilege','Can consequential service identities act beyond their purpose?','Review workload roles, tokens, secrets and downstream authorization.','Reduce service authority and add downstream policy checks.'),
 q('IL1','Lifecycle','Are joiner, mover and leaver changes linked to authoritative events?','Sample timing, exceptions and systems outside automation.','Assign owners for lifecycle events and exception follow-up.',3),
 q('IL2','Lifecycle','Does revocation end active authority as intended?','Test sessions, refresh tokens, API keys and cached access in a controlled case.','Run a scoped revocation test and record remaining access.'),
 q('IL3','Lifecycle','Are access reviews focused on meaningful decisions?','Reviewers need context, conflicts and an effective removal path.','Provide role context and verify a removal from review to enforcement.')
 ]},
 {id:'mobile',name:'Mobile release readiness',subtitle:'Review the application, API and device boundary together.',type:'Release readiness',minutes:'5 to 7',version:'Original screening pack 1.0 | Mobile release',source:'https://mas.owasp.org/',scope:'12 original mobile-release prompts. Not an OWASP MAS checklist, source review, device test or app-store approval.',areas:['Data','Platform','API','Release'],questions:[
 q('MD1','Data','Is sensitive data minimized on the device?','Trace cached records, logs, screenshots, notifications and backups.','Remove unnecessary device data and document remaining retention.',3),
 q('MD2','Data','Are secrets excluded from the application package and logs?','Inspect build configuration and a representative release artifact in an authorized environment.','Move secrets to appropriate server-side or protected mechanisms.'),
 q('MD3','Data','Are local data protections matched to realistic device threats?','Consider lock state, backup, shared storage and rooted-device assumptions.','Document and test the local protection boundary.'),
 q('MP1','Platform','Are exported components and deep links intentionally exposed?','Review handlers, intent filters, URL schemes and caller validation.','Restrict component exposure and test untrusted invocation.',3),
 q('MP2','Platform','Are platform permissions limited to the feature need?','Compare requested permissions with active functionality and user explanations.','Remove unused permissions and justify sensitive access.'),
 q('MP3','Platform','Does the application fail safely when platform trust changes?','Review certificate, device-integrity and dependency assumptions without treating them as authorization.','Define safe fallback and server-side enforcement.'),
 q('MA1','API','Does the server enforce object and function permission for every mobile role?','A mobile interface restriction does not protect an API operation.','Add server-side positive and negative authorization tests.',3),
 q('MA2','API','Can tokens and sessions be revoked after logout or device loss?','Test refresh behavior and protected actions after the event.','Define and test mobile session termination conditions.'),
 q('MA3','API','Are transport and certificate decisions deployable without unsafe bypasses?','Review debug exceptions, proxies, certificate changes and recovery.','Remove release bypasses and document certificate-change handling.'),
 q('MR1','Release','Are debug features and test endpoints excluded from release builds?','Use reproducible release configuration and artifact inspection.','Add release checks for flags, endpoints and diagnostic data.',3),
 q('MR2','Release','Can a vulnerable mobile version be contained or retired?','Consider forced update, server compatibility and customer communication.','Define version support and emergency containment decisions.'),
 q('MR3','Release','Are privacy and security claims consistent with actual behavior?','Compare notices, permissions, SDKs and observed data flows.','Reconcile public claims with the reviewed release behavior.')
 ]},
 {id:'privacy',name:'Data protection operations',subtitle:'Turn data promises into owned, testable work.',type:'Privacy operations',minutes:'5 to 7',version:'Original screening pack 1.0 | Data protection operations',source:'https://www.nist.gov/privacy-framework',scope:'12 original operational prompts. Not legal advice, a regulatory opinion, a privacy impact assessment or complete NIST Privacy Framework profile.',areas:['Purpose','Inventory','Rights','Incidents'],questions:[
 q('DP1','Purpose','Is each sensitive-data use connected to a defined purpose and owner?','Choose a workflow and compare collection with the decision it supports.','Record the purpose, owner and data minimization decision.',3),
 q('DP2','Purpose','Are high-impact automated decisions reviewed for people and context?','Consider inputs, error, contestability and human responsibility.','Define review and escalation for consequential decisions.'),
 q('DP3','Purpose','Are new uses or disclosures reviewed before launch?','Include analytics, AI features, vendors and cross-border dependencies.','Add a change trigger and accountable review.'),
 q('DI1','Inventory','Can the organization trace important personal data across systems and suppliers?','Follow collection, transformation, sharing, retention and deletion.','Build a scoped data-flow and dependency inventory.',3),
 q('DI2','Inventory','Are retention rules implemented rather than only documented?','Inspect deletion jobs, archives, backups, exceptions and evidence.','Test one retention rule from source through deletion evidence.'),
 q('DI3','Inventory','Are test and analytics datasets governed like their source data?','Review copied, masked, synthetic and exported datasets.','Reduce or protect non-production personal data.'),
 q('DR1','Rights','Can a verified request reach all relevant systems?','Trace identity checks, search, exceptions, deadlines and approval.','Run a synthetic request and record coverage gaps.',3),
 q('DR2','Rights','Are correction and deletion decisions consistently recorded?','Review ownership, downstream propagation and lawful exceptions with qualified advice.','Create a decision record and downstream follow-up.'),
 q('DR3','Rights','Can people understand the important use without reading internal architecture?','Compare actual behavior with notices and consent choices.','Rewrite unclear explanations and validate the user path.'),
 q('DN1','Incidents','Can an incident team determine whose data may be affected?','Check inventory, logs, vendor records and decision authority.','Add privacy facts and roles to incident triage.',3),
 q('DN2','Incidents','Are notification decisions evidence-linked and reviewed?','Record facts, uncertainty, applicable advice and timing without guessing obligations.','Create an incident decision timeline with qualified review.'),
 q('DN3','Incidents','Do exercises include customer, employee and supplier data scenarios?','Test dependencies, communication and follow-up ownership.','Run a fictional privacy incident tabletop and assign actions.')
 ]},
 {id:'culture',name:'Security culture & role readiness',subtitle:'Measure whether people can make the needed decision.',type:'People readiness',minutes:'5 to 7',version:'Original screening pack 1.0 | Security culture',source:'https://www.cisa.gov/resources-tools/resources/cybersecurity-awareness-program-toolkit',scope:'12 original people-readiness prompts. Not an employee-performance rating, psychometric measure, certification or proof of reduced incident likelihood.',areas:['Roles','Learning','Practice','Feedback'],questions:[
 q('CR1','Roles','Do people know the security decisions expected in their role?','Use concrete actions for engineers, managers, support staff and leaders.','Define role-specific security decisions and escalation routes.',3),
 q('CR2','Roles','Can managers explain who accepts risk and exceptions?','Review a recent exception or deferred action.','Document risk and exception authority.'),
 q('CR3','Roles','Are security responsibilities included when roles change?','Check onboarding, promotion, contractor and supplier transitions.','Add role-change security briefings and ownership.'),
 q('CL1','Learning','Does training use scenarios people actually encounter?','Compare exercises with access, data, engineering and incident decisions.','Replace generic content with role-relevant practice.',3),
 q('CL2','Learning','Can participants explain why an answer is safer?','Completion alone does not establish transferable judgment.','Add rationale, reflection and a follow-up task.'),
 q('CL3','Learning','Are accessibility, language and time constraints addressed?','Review delivery formats and the ability to ask for help.','Adapt training access and provide alternative formats.'),
 q('CP1','Practice','Do teams rehearse ambiguous situations without harming real systems?','Use synthetic evidence, clear boundaries and safe injects.','Schedule a bounded scenario with a facilitator and observers.',3),
 q('CP2','Practice','Are technical and executive decisions exercised together?','Trace containment, service impact, communication and risk ownership.','Include cross-functional decision points in the next exercise.'),
 q('CP3','Practice','Does each exercise end with owned improvements?','Look for due dates, dependencies and a later validation step.','Maintain an after-action register and retest plan.'),
 q('CF1','Feedback','Can people report mistakes and suspicious activity without fear or delay?','Inspect reporting routes, acknowledgement and learning culture.','Clarify safe reporting and timely feedback.',3),
 q('CF2','Feedback','Are training needs informed by incidents and control changes?','Use trends carefully; do not expose or rank individuals.','Translate lessons into targeted role-based practice.'),
 q('CF3','Feedback','Is programme success measured beyond attendance and clicks?','Consider decision quality, response time, unresolved barriers and retest outcomes.','Choose outcome measures with privacy and interpretation limits.')
 ]}
);

const answerLabels = {implemented:'Operating',partial:'Partial',planned:'Planned',absent:'Not in place',unknown:'Not sure'};
const values={implemented:3,partial:2,planned:1,absent:0};
function scoreAssessment(pack, answers={}) {
 if (!pack || !Array.isArray(pack.questions)) throw new Error('Unknown assessment');
 const selected=pack.questions.map(question=>({question,answer:answers[question.id]}));
 const answered=selected.filter(x=>Object.hasOwn(answerLabels,x.answer));
 const known=answered.filter(x=>Object.hasOwn(values,x.answer));
 const index=known.length?Math.round(100*known.reduce((sum,x)=>sum+values[x.answer],0)/(3*known.length)):null;
 const areas=pack.areas.map(area=>{const all=selected.filter(x=>x.question.area===area),n=all.filter(x=>Object.hasOwn(values,x.answer));return {name:area,total:all.length,known:n.length,index:n.length?Math.round(100*n.reduce((s,x)=>s+values[x.answer],0)/(3*n.length)):null};});
 // Only a known gap is a remediation action. Unknown and unanswered prompts are
 // discovery questions; turning them into work items overstates what the review found.
 const actions=selected.filter(x=>['partial','planned','absent'].includes(x.answer)).map(x=>({...x.question,status:x.answer,rank:x.question.priority*10+(x.answer==='absent'?4:x.answer==='planned'?2:1)})).sort((a,b)=>b.rank-a.rank||a.id.localeCompare(b.id));
 const questionsToClarify=selected.filter(x=>x.answer==='unknown'||!x.answer).map(x=>({...x.question,status:x.answer||'unanswered'}));
 return {total:pack.questions.length,answered:answered.length,known:known.length,unknown:answered.length-known.length,unanswered:pack.questions.length-answered.length,coverage:Math.round(100*known.length/pack.questions.length),index,areas,actions,questionsToClarify};
}
function validateDraft(raw) {
 if (!raw || typeof raw!=='object'||Array.isArray(raw)||raw.schema!=='az.snapshot.v1') throw new Error('Choose a compatible snapshot JSON export.');
 const pack=catalogue.find(p=>p.id===raw.pack);
 if(!pack||raw.version!==pack.version||!raw.answers||typeof raw.answers!=='object'||Array.isArray(raw.answers))throw new Error('Unknown pack or incompatible version.');
 const allowed=new Set(pack.questions.map(q=>q.id));const answers={};
 for(const [key,value] of Object.entries(raw.answers)){if(!allowed.has(key)||typeof value!=='string'||!Object.hasOwn(answerLabels,value))throw new Error('The draft contains an unsupported question or response.');answers[key]=value;}
 return {schema:'az.snapshot.v1',pack:pack.id,version:pack.version,answers};
}
function analyzeHeaders(text) {
 if(typeof text!=='string'||text.length>20000)throw new Error('Paste up to 20,000 characters.');
 const headers=new Map();for(const line of text.split(/\r?\n/)){const i=line.indexOf(':');if(i>0){const key=line.slice(0,i).trim().toLowerCase();if(/^[a-z0-9-]+$/.test(key)){const v=line.slice(i+1).trim();headers.set(key,headers.has(key)?headers.get(key)+', '+v:v);}}}
 const csp=headers.get('content-security-policy')||'';
 const policies=(headers.get('referrer-policy')||'').split(',').map(s=>s.trim());const validPolicies=new Set(['no-referrer','no-referrer-when-downgrade','same-origin','origin','strict-origin','origin-when-cross-origin','strict-origin-when-cross-origin','unsafe-url']);
 const permissions=headers.get('permissions-policy')||'';
 return [
 {name:'Content-Security-Policy',status:!csp?'Not observed':/\bunsafe-inline\b|\bunsafe-eval\b/.test(csp)?'Review':'Present',note:!csp?'No enforcing policy was observed in the pasted response.':/\bunsafe-inline\b|\bunsafe-eval\b/.test(csp)?'Inline/eval allowances need context; a nonce or hash may change their effect.':'Presence alone does not establish an effective policy.'},
 {name:'Strict-Transport-Security',status:!headers.has('strict-transport-security')?'Not observed':/(?:^|;)\s*max-age\s*=\s*[1-9][0-9]*\s*(?:;|$)/i.test(headers.get('strict-transport-security')) && !headers.get('strict-transport-security').includes(',') && (headers.get('strict-transport-security').match(/max-age/gi)||[]).length===1?'Present':'Review',note:'Meaningful on HTTPS; confirm host coverage, deployment and lifetime.'},
 {name:'X-Content-Type-Options',status:headers.get('x-content-type-options')?.toLowerCase()==='nosniff'?'Present':headers.has('x-content-type-options')?'Review':'Not observed',note:'Check for the nosniff value and correct response content types.'},
 {name:'Referrer-Policy',status:!headers.has('referrer-policy')?'Not observed':policies.every(p=>validPolicies.has(p))?'Present':'Review',note:'Review whether the policy matches the privacy needs of this page.'},
 {name:'Framing policy',status:/frame-ancestors\s/i.test(csp)||/^(DENY|SAMEORIGIN)$/i.test(headers.get('x-frame-options')||'')?'Present':'Not observed',note:'Review permitted ancestors against legitimate embedding needs.'},
 {name:'Permissions-Policy',status:!headers.has('permissions-policy')?'Not observed':/^[a-z][a-z0-9-]*\s*=\s*\([^)]*\)/i.test(permissions)?'Present':'Review',note:'Restrict browser capabilities only where appropriate to application behavior.'}
 ];
}
function riskRating(likelihood,impact){if(!Number.isInteger(likelihood)||!Number.isInteger(impact)||likelihood<1||likelihood>5||impact<1||impact>5)throw new Error('Choose values from 1 to 5.');const score=likelihood*impact;return {score,label:score>=15?'High':score>=6?'Moderate':'Lower',method:'Illustrative 5 × 5 prioritization; not CVSS, an actuarial estimate, or organizational risk acceptance.'};}

/** Data-only functions. No filesystem, storage, telemetry or network access. */
const WORKSPACE_SCHEMA = 'az.workbench.v2';
const MAX_SNAPSHOTS = 8;
const MIN_SUMMARY_COVERAGE = 60; // Product presentation rule; not a framework requirement.
const record = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const bounded = (value, max, fallback = '') => {
  if (value === undefined) return fallback;
  if (typeof value !== 'string' || value.length > max || /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(value)) throw new Error('A text field is invalid or too long.');
  return value.trim();
};
function validateSnapshot(raw) {
  if (!record(raw)) throw new Error('Choose a snapshot JSON object.');
  if (raw.schema === 'az.snapshot.v1') {
    const legacy = validateDraft(raw);
    return {schema: WORKSPACE_SCHEMA, id: '', title: 'Imported snapshot', scope: '', pack: legacy.pack,
      version: legacy.version, answers: legacy.answers, notes: {}, actions: {}, updatedAt: ''};
  }
  if (raw.schema !== WORKSPACE_SCHEMA) throw new Error('This file is not a supported snapshot.');
  const pack = catalogue.find(p => p.id === raw.pack);
  if (!pack || raw.version !== pack.version) throw new Error('The assessment or question version is incompatible.');
  const clean = validateDraft({schema: 'az.snapshot.v1', pack: raw.pack, version: raw.version, answers: raw.answers});
  const allowed = new Set(pack.questions.map(q => q.id)), notes = {}, actions = {};
  if (raw.notes !== undefined && !record(raw.notes)) throw new Error('Notes must be an object.');
  if (raw.actions !== undefined && !record(raw.actions)) throw new Error('Actions must be an object.');
  for (const [id, text] of Object.entries(raw.notes || {})) {
    if (!allowed.has(id)) throw new Error('The snapshot has an unknown note reference.');
    notes[id] = bounded(text, 500);
  }
  for (const [id, a] of Object.entries(raw.actions || {})) {
    if (!allowed.has(id) || !record(a) || !['open', 'in_progress', 'done'].includes(a.status)) throw new Error('Invalid action reference or state.');
    const due = bounded(a.due, 10);
    if (due && (!/^\d{4}-\d\d-\d\d$/.test(due) || Number.isNaN(Date.parse(due + 'T00:00:00Z')) || new Date(due + 'T00:00:00Z').toISOString().slice(0,10) !== due)) throw new Error('Use a real YYYY-MM-DD due date.');
    actions[id] = {status: a.status, owner: bounded(a.owner, 80), due};
  }
  const id = bounded(raw.id, 80), updatedAt = bounded(raw.updatedAt, 30);
  if (id && !/^[a-zA-Z0-9-]{8,80}$/.test(id)) throw new Error('Invalid snapshot identifier.');
  if (updatedAt && Number.isNaN(Date.parse(updatedAt))) throw new Error('Invalid snapshot date.');
  return {schema: WORKSPACE_SCHEMA, id, pack: pack.id, version: pack.version, title: bounded(raw.title, 90, 'Untitled snapshot'),
    scope: bounded(raw.scope, 600), answers: clean.answers, notes, actions, updatedAt};
}
function describeSnapshot(snapshot) {
  const value = validateSnapshot(snapshot), pack = catalogue.find(p => p.id === value.pack);
  const score = scoreAssessment(pack, value.answers);
  return {...score, eligible: score.coverage >= MIN_SUMMARY_COVERAGE,
    openActions: score.actions.filter(a => value.actions[a.id]?.status !== 'done').length,
    presentation: score.known === 0 ? 'Start with what you know' : score.coverage < MIN_SUMMARY_COVERAGE ? 'More context needed' : 'Self-check recorded; verification still needed'};
}
function compareSnapshots(beforeRaw, afterRaw) {
  const before = validateSnapshot(beforeRaw), after = validateSnapshot(afterRaw);
  if (before.pack !== after.pack || before.version !== after.version) throw new Error('Compare the same assessment and question version.');
  const pack = catalogue.find(p => p.id === before.pack);
  return {pack: pack.name, before: describeSnapshot(before), after: describeSnapshot(after),
    changes: pack.questions.filter(q => before.answers[q.id] !== after.answers[q.id]).map(q => ({id:q.id, title:q.title,
      area:q.area, before:before.answers[q.id] || 'unanswered', after:after.answers[q.id] || 'unanswered'})),
    disclaimer:'Changed self-reports, not independently verified improvement or a change in measured risk.'};
}
const mdSafe = value => String(value).replaceAll('|','\\|').replace(/[\r\n]+/g, ' ').replace(/([<>])/g, '\\$1');
function snapshotMarkdown(raw) {
  const s = validateSnapshot(raw), p = catalogue.find(x => x.id === s.pack), r = describeSnapshot(s);
  const lines = [`# ${mdSafe(s.title || p.name)}`, '', `Assessment: ${p.name}`, `Question version: ${p.version}`, `Scope: ${mdSafe(s.scope || 'Not supplied')}`,
    '', '## Read this result correctly', '', `${r.known} of ${r.total} prompts have known answers (${r.coverage}% coverage). ${r.unknown} are explicitly unknown; ${r.unanswered} are unanswered.`,
    r.eligible ? `Known-answer response index: ${r.index}/100. This is not a compliance percentage.` : 'The headline index is withheld until at least 60% known-answer coverage. This is a presentation rule, not a framework requirement.',
    'Answers and notes are self-reported. No systems or evidence have been verified. Do not include credentials or sensitive client data.',
    '', '## Remediation actions from known gaps', '', '| ID | Question | Response | Next action | Owner | Due | Work state |', '|---|---|---|---|---|---|---|'];
  for (const q of p.questions.filter(q=>['partial','planned','absent'].includes(s.answers[q.id]))) {
    const a=s.actions[q.id]||{};
    lines.push(`| ${q.id} | ${mdSafe(q.title)} | ${s.answers[q.id]||'unanswered'} | ${mdSafe(q.action)} | ${mdSafe(a.owner||'Unassigned')} | ${a.due||'Not set'} | ${a.status||'open'} |`);
  }
  if(!r.actions.length) lines.push('| None | No known gaps recorded | Not applicable | Review evidence before relying on an Operating response. | Unassigned | Not set | Not started |');
  lines.push('', '## Questions to clarify', '');
  if(r.questionsToClarify.length) for(const q of r.questionsToClarify) lines.push(`- **${q.id} / ${mdSafe(q.title)}**: ${q.status==='unknown'?'Marked Not sure':'Unanswered'}. ${mdSafe(q.check)}`);
  else lines.push('No unknown or unanswered prompts remain. This does not establish verification.');
  lines.push('', '## Complete response record', '', '| ID | Question | Response |', '|---|---|---|');
  for(const q of p.questions) lines.push(`| ${q.id} | ${mdSafe(q.title)} | ${s.answers[q.id]||'unanswered'} |`);
  if (Object.values(s.notes).some(Boolean)) {lines.push('', '## Your review notes', '');for (const [id,text] of Object.entries(s.notes)) if(text) lines.push(`### ${id}`, '', mdSafe(text), '');}
  lines.push('', '## Limits and reference', '', p.scope, p.source, '', 'Marking an action done does not change its assessment answer or establish verification.');
  return lines.join('\n');
}
function subnetInfo(raw) {
  if (typeof raw !== 'string' || raw.length > 40) throw new Error('Enter one IPv4 address with a /0 to /32 prefix.');
  const m = raw.trim().match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\/(\d{1,2})$/);
  if (!m) throw new Error('Use CIDR notation, such as 192.0.2.25/24.');
  const parts=m.slice(1,5).map(Number), prefix=Number(m[5]);
  if(parts.some(n=>n>255)||prefix>32) throw new Error('An octet or prefix is outside the IPv4 range.');
  if (m.slice(1,5).some(s => s.length>1 && s.startsWith('0'))) throw new Error('Remove ambiguous leading zeros.');
  const ip=parts.reduce((n,p)=>n*256+p,0), size=2**(32-prefix), network=Math.floor(ip/size)*size, last=network+size-1;
  const format=n=>[Math.floor(n/16777216)%256,Math.floor(n/65536)%256,Math.floor(n/256)%256,n%256].join('.');
  return {input:raw.trim(),prefix,network:format(network),mask:format(2**32-size),last:format(last),
    firstHost:format(prefix>=31?network:network+1),lastHost:format(prefix>=31?last:last-1),hosts:prefix>=31?size:Math.max(0,size-2),
    broadcast:prefix>=31?'Not applicable':format(last),note:prefix===31?'Two endpoints on a /31 point-to-point link (RFC 3021); not a conventional broadcast subnet.':prefix===32?'One host route. No network/broadcast reservation.':'Usable count follows the conventional network and broadcast reservation; provider reservations may differ.'};
}
function inspectJWT(raw, nowSeconds = Date.now()/1000) {
  if(typeof raw!=='string'||raw.length>16384) throw new Error('Use a non-sensitive sample token under 16 KB.');
  const pieces=raw.trim().split('.');
  if(pieces.length!==3) throw new Error('This inspector accepts three-part compact JWS tokens, not encrypted JWE.');
  const decode=s=>{
    if(!s||!/^[A-Za-z0-9_-]+$/.test(s)||s.length%4===1)throw new Error('Invalid base64url segment.');
    try {const bytes=Uint8Array.from(atob(s.replaceAll('-','+').replaceAll('_','/')+'='.repeat((4-s.length%4)%4)),c=>c.charCodeAt(0));const v=JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(bytes));if(!record(v)) throw Error();return v;}catch{throw new Error('Header or payload is not a UTF-8 JSON object.');}
  };
  const header=decode(pieces[0]),payload=decode(pieces[1]),warnings=['Signature NOT verified. Decoding does not authenticate any claim.'];
  if(pieces[2]&&(!/^[A-Za-z0-9_-]+$/.test(pieces[2])||pieces[2].length%4===1))throw new Error('Invalid signature encoding.');
  if(typeof header.alg!=='string')warnings.push('The algorithm header is missing or not a string.');
  if(header.alg==='none'||!pieces[2])warnings.push('Unsigned or empty-signature sample: do not treat this token as trusted.');
  for(const key of ['exp','nbf','iat']) if(key in payload && (typeof payload[key]!=='number'||!Number.isFinite(payload[key])))warnings.push(`${key} is not a numeric date.`);
  if(typeof payload.exp==='number'&&payload.exp<=nowSeconds)warnings.push('The decoded exp claim is in the past.');
  if(typeof payload.nbf==='number'&&payload.nbf>nowSeconds)warnings.push('The decoded nbf claim is in the future.');
  return {header,payload,warnings,verified:false};
}
function authorizationDecision({actor,resource,mode}) {
  const actors={alice:{name:'Alice',tenant:'north'},bob:{name:'Bob',tenant:'south'},auditor:{name:'Auditor',tenant:'north'}};
  const resources={order101:{name:'Order 101',owner:'alice',tenant:'north'},order202:{name:'Order 202',owner:'bob',tenant:'south'}};
  if(!Object.hasOwn(actors,actor)||!Object.hasOwn(resources,resource)||!['enforced','missing'].includes(mode)) throw new Error('Select valid synthetic actors, objects and policy.');
  const a=actors[actor],r=resources[resource];
  const allow=mode==='missing'||(a.tenant===r.tenant&&(r.owner===actor||actor==='auditor'));
  return {allowed:allow,status:allow?200:403,actor:a.name,resource:r.name,
    reason:mode==='missing'?'Flawed model: checks login, but not object permission.':allow?'The synthetic tenant and owner/auditor policy allows this read.':'The synthetic object authorization policy denies this cross-boundary read.',
    trace:['Authenticated synthetic actor',`Resource belongs to ${r.tenant}`,mode==='missing'?'Object authorization omitted':'Tenant and relationship evaluated',allow?'Synthetic read allowed':'Synthetic read denied']};
}

window.SecurityEngine={catalogue,answerLabels,scoreAssessment,validateDraft,analyzeHeaders,riskRating,WORKSPACE_SCHEMA,MAX_SNAPSHOTS,MIN_SUMMARY_COVERAGE,validateSnapshot,describeSnapshot,compareSnapshots,snapshotMarkdown,subnetInfo,inspectJWT,authorizationDecision};})();
