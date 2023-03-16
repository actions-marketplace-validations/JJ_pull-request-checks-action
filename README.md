# Get results of a checklist from the body of a pull request [![build-test](https://github.com/JJ/pull-request-checks-action/actions/workflows/test.yml/badge.svg)](https://github.com/JJ/pull-request-checks-action/actions/workflows/test.yml)

Sometimes, the body of a pull request contains

```markdown
- [X] ONE: Checks this.
- [x] Check that.
- [ ] Does not check this.
```

This will be exported to github action variables, and also set as step output. The outputs will have the name of the label if it exists (`ONE`, in this case) or `check`+ index (starting with 0) otherwise. This one, for instance, will create the variables `ONE`, `checks1` and `checks2`; the first two of them will be set to `true`, the last one to `false`.

## Use

Check  [the used workflow](.github/workflows/get-pr-checks.html) for
an example

## History

* `release/v1`: first real release
* `v1`:_ re-release, but barely working
* `v2`: uses labels for checks, works.
