# Security and Compliance Self-Assessment

**Run a free, honest readiness self-assessment for the framework you care about, entirely in your browser.**

<p align="center">
  <a href="https://abdullahzarshaid.github.io/security-assessment-tools/"><b>▶ Open the live tool</b></a>
  &nbsp;·&nbsp;
  <a href="https://abdullahzarshaid.github.io/grc-documentation-kit/">GRC Documentation Kit</a>
  &nbsp;·&nbsp;
  <a href="https://abdullahzarshaid.com">abdullahzarshaid.com</a>
</p>

![Security and Compliance Self-Assessment](assets/social-preview.png)

Fifteen readiness assessments, from a plain-language starting point to framework-aligned and technical reviews. You rate each prompt on a five-point, evidence-based scale, and the tool shows you where you stand by area, lists the highest-impact gaps first, and links every gap to an open remediation template you can actually use.

## Why this one is different

- **Private by design.** No account, no server, no tracking. Your answers are stored only in your own browser so you can come back to them, and you can clear them at any time.
- **Honest scoring.** Prompts you mark *Not sure*, and prompts you leave unanswered, are shown separately and are never counted as a pass or as a gap. The result is a conversation starter for your own team, not an audit or a certification.
- **Every gap is actionable.** Each gap links straight to a matching remediation template in the open [GRC Documentation Kit](https://abdullahzarshaid.github.io/grc-documentation-kit/), so you leave with a next step, not just a number.
- **Original content.** The prompts are original readiness questions, not reproduced standards text.

## The assessments

| Assessment | Prompts | Starting point for |
|---|---|---|
| NIST CSF 2.0 | 18 | Organising a programme around the six CSF functions |
| ISO 27001 readiness | 12 | Defining or improving an ISMS |
| SOC 2 preparation | 12 | A service organization heading into a SOC 2 examination |
| Cloud & identity | 12 | Permissions, exposure and recovery in the cloud |
| AI & agent security | 12 | Teams using or building AI features |
| SOC & incident readiness | 12 | Detection, triage and response |
| Small business security | 12 | Any small business or product team |
| Web & API release readiness | 12 | Shipping a web or API change safely |
| Supplier security review | 12 | Assessing a vendor that handles your data |
| Backup & recovery readiness | 12 | Proving you can actually restore |
| Secure software delivery | 12 | Security across design, build and release |
| Identity & privileged access | 12 | Accounts, authentication and privilege |
| Mobile release readiness | 12 | Shipping a mobile app safely |
| Data protection operations | 12 | Running privacy obligations day to day |
| Security culture & role readiness | 12 | People, training and role readiness |

That is 186 original prompts in total.

## Security tools

Beyond the assessments, the [Tools page](https://abdullahzarshaid.github.io/security-assessment-tools/tools.html) has five hands-on utilities, all client-side:

- **Subnet calculator** for IPv4 CIDR blocks (network, mask, usable range, host count).
- **JWT inspector** that decodes the header and payload (the signature is never verified).
- **Security-header analyzer** that flags common response headers as present, review or not observed.
- **Access-control demonstration** of broken object-level authorization (BOLA), on synthetic data.
- **Risk matrix** (5 by 5 likelihood and impact) for quick prioritization.

Use non-sensitive sample data only; none of these replace a proper security test.

## How the score works

The index is an equal-weight, selected-state measure:

```
index = (sum of your numeric ratings) / (number of rated prompts × 3) × 100
```

Each prompt is rated *Operating (3)*, *Partial (2)*, *Planned (1)* or *Not in place (0)*, or marked *Not sure*. Only rated prompts count toward the index. *Not sure* and unanswered prompts are reported separately and are never scored as a pass or as a gap. Gaps are listed highest priority first. Scores across different assessments are not comparable, by design.

## Run it locally

It is a static site with no build step and no dependencies.

```bash
git clone https://github.com/abdullahzarshaid/security-assessment-tools.git
cd security-assessment-tools
python -m http.server 8080
# then open http://localhost:8080
```

## What this is not

This tool does not test your systems, read any of your data, or make a compliance determination. It is a structured self-assessment to help you decide where to focus. For authoritative outcomes, read the framework itself and use competent independent review where it matters.

## License

Content and code are released under the [MIT License](LICENSE). Use it, adapt it, build on it.

---

Built by [Abdullah Bin Zarshaid](https://abdullahzarshaid.com).
Questions or feedback: abdullahbinzarshaid@gmail.com
