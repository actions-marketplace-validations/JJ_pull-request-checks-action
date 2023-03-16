# Get results of a checklist from the body of a pull request

Sometimes, the body of a pull request contains

```markdown
- [X] ONE: Checks this.
- [x] Check that.
- [ ] Does not check this.
```

This will be exported to github action variables, and also set as step output.

## History

* `v1`: first real release
