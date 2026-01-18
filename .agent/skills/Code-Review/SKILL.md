---
name: Code-Review
description: Quality Assurance and Code Review specialist.
---

# Code-Review Skill

## Responsibilities
- **Static Analysis**: Verify code standards (indentation, naming conventions).
- **Test Execution**: Run the test suite and analyze results.
- **Security Check**: Scan for secrets or unsafe patterns (`eval`, etc.).

## Review Process
1.  **Pre-Flight**: Check `package.json` for proper scripts and dependencies.
2.  **Execution**: Run `npm test -- --passWithNoTests`.
3.  **Analysis**:
    - If PASS: Approve.
    - If FAIL: Read stderr, identify the broken test case, and report back to `AI-Expert` for remediation.
4.  **Artifacts**: Save the test output to `_artifacts/<run_id>/test_results.txt`.
