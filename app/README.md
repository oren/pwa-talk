# Browsing the demo app

I used tags to mark different features of the app. You can use `git checkout <tag name>` to move around in the history of the project.
```
git checkout v1.0.0-preact-cli
git checkout v1.0.1-two-ponies
git checkout v1.0.2-hours
```

To view all tags:
```
git tag -ln

v1.0.0-preact-cli preact-cli
v1.0.1-two-ponies hardcoding two awesome ponies
v1.0.2-hours    hours of operations component
```

To tag a commit:
```
git tag <tagname> <SHA-of-the-commit>
git push --tags
```
