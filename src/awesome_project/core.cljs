(ns awesome-project.core
  (:require [shadow.react-native :refer (render-root)]
            ["react-native" :as rn]
            ["react" :as react]
            [reagent.core :as r]
            #_[awesome-project.big-map-1]
            #_[awesome-project.big-map-2]
            #_[awesome-project.big-map-3]
            #_[awesome-project.big-map-4]))

(defonce splash-img (js/require "../assets/shadow-cljs.png"))
(defonce counter (r/atom 0))

(defn root []
  [:> rn/View {:style {:flex 1
                       :alignItems "center"
                       :justifyContent "center"}}
   [:> rn/Text "Hello!"]
   [:> rn/Image {:source splash-img :style {:width 200 :height 200}}]
   [:> rn/TouchableOpacity {:fn/on-press #(swap! counter inc)}
    [:> rn/View {:style {:background-color :green
                         :padding-horizontal 20
                         :padding-vertical 5
                         :border-radius 10}}
     [:> rn/Text {:style {:color :white}}
      "Tap!"]]]
   [:> rn/Text (str @counter)]])

(defn start
  {:dev/after-load true}
  []
  (render-root "AwesomeProject" (r/as-element [root])))

(defn init []
  (start))