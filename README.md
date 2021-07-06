# Android cljsrn hot-reload freeze repro

This is a minimal reproduction of a strange problem where the Android app freezes when hot-reloading.

The React Native app is created using

```
$ npx react-native init AwesomeProject
````

as per https://reactnative.dev/docs/environment-setup#native

Then a `shadow-cljs.edn` file and some silly ClojureScript was added.

## Some big-ish maps

The interesting parts of the project code are the `src/awesome_project/big_map_[1-4].cljs` files. They all contain the exact same map definitions. It's six rather big maps, created with the code in the `lorem.cljs` module. These maps have 100 entries each, where each entry is a map of six random long substrings of this text:

> Aenean viverra, ante in mollis cursus, enim ipsum eleifend metus, non ultrices mauris erat eget magna. Mauris molestie elit finibus turpis pharetra dictum. Maecenas eget turpis faucibus, mollis nulla ac, posuere sem. Etiam vitae dictum libero, euismod aliquet tellus. Aliquam ante erat, volutpat vitae bibendum sit amet, fermentum eu diam. Donec finibus lorem luctus pulvinar euismod. Nam nec ante tellus. Aenean interdum velit tincidunt tortor rutrum, ac bibendum urna pharetra. Phasellus vitae dapibus mi. Sed quis felis et odio ultricies commodo eget ut enim.

So, the six maps are unique with unique strings. But they are copy/pasted in to four files. (This is not important for the reproduction, I think, just that I was lazy.)


## Reproduction

The `big-map-[1-4]` namespaces have ignored (`#_`) requires in `core.cljs`. Start the project with:

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

Then unlock the requires of the big maps and hot-reload.

**Expected**: Shadow hot-reloads the change (with no visible change)

**Actual**: The debugger disconnects and the app stops responding.

## Discussion

I have tried to reproduce this with Krell as well, but it hasn't happened. I haven't been trying much. I can see that Shadow and Krell choose to reload different sets of files, so maybe it just is less likely to happen in Krell?

When I run this, only three of the `big-maps-#` namespaces need to be required in order for the freeze to happen. The fourth one is included for more freeze guarantee. If it doesn't happen for you with four files required, try with more files.