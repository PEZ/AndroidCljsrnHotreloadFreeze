# Android cljsrn hot-reload freeze repro

This is a minimal reproduction of a strange problem where the Android app freezes when hot-reloading.

The React Native app is created using

```
$ npx react-native init AwesomeProject
````

as per https://reactnative.dev/docs/environment-setup#native

Then a `shadow-cljs.edn` file and some silly ClojureScript was added.

## Some big-ish maps

The interesting parts of the project code are the `many_defs_[1-6].cljs` files. They are created using the code in `lorem.clj`. They contain 1000 definitions each, all of which define a var bound to a map with entries `:a` to `:f`, each referencing a random substring of this text:

> Aenean viverra, ante in mollis cursus, enim ipsum eleifend metus, non ultrices mauris erat eget magna. Mauris molestie elit finibus turpis pharetra dictum. Maecenas eget turpis faucibus, mollis nulla ac, posuere sem. Etiam vitae dictum libero, euismod aliquet tellus. Aliquam ante erat, volutpat vitae bibendum sit amet, fermentum eu diam. Donec finibus lorem luctus pulvinar euismod. Nam nec ante tellus. Aenean interdum velit tincidunt tortor rutrum, ac bibendum urna pharetra. Phasellus vitae dapibus mi. Sed quis felis et odio ultricies commodo eget ut enim.

So, that is 1000 maps with 7 strings of maximum that ^ length.

**NB:** All files contain the same definitions. Each file is basically a copy of the first one. (As I don't know if ClojureScripts interns strings, I don't know if that is important, it is more a function of me being lazy.)

## Reproduction

The `many-defs-[1-6]` namespaces have ignored (`#_`) requires in `core.cljs`. Start the project with:

```
mpm i
```

Then use your favorite way of building the app in shadow-cljs watch mode. 

Then start the Metro bundler/packager.

Then start the Android app:

```
$ npm run android
```

Disable Fast Refresh, and start the Debug session. Check that you can hot-reload some small change of the app.

Then unlock all six requires of the `many-defs-#` namespaces, and hot-reload.

**Expected**: Shadow hot-reloads the change (with no visible change)

**Actual**: The debugger disconnects and the app stops responding.

## Discussion

I have tried to reproduce this with Krell as well, but it hasn't happened. I haven't been trying that much, so it is not clear to me that this is an isolated shadow-cljs issue.

When I run this, only two of the `many-defs-#` namespaces need to be required in order for the freeze to happen. The rest are included for better freeze guarantee. If it doesn't happen for you with two requires, try with moar of them.

I've enabled the [Discussions](https://github.com/PEZ/AndroidCljsrnHotreloadFreeze/discussions) tab on this repo. Please engage!