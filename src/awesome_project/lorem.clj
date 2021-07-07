(ns awesome-project.lorem)

(def ipsum
  "Aenean viverra, ante in mollis cursus, enim ipsum eleifend metus, non ultrices mauris erat eget magna. Mauris molestie elit finibus turpis pharetra dictum. Maecenas eget turpis faucibus, mollis nulla ac, posuere sem. Etiam vitae dictum libero, euismod aliquet tellus. Aliquam ante erat, volutpat vitae bibendum sit amet, fermentum eu diam. Donec finibus lorem luctus pulvinar euismod. Nam nec ante tellus. Aenean interdum velit tincidunt tortor rutrum, ac bibendum urna pharetra. Phasellus vitae dapibus mi. Sed quis felis et odio ultricies commodo eget ut enim.")

(defn- gen-str []
  (-> ipsum
      (subs 0 (rand-int (count ipsum)))))

(comment
  ; Generate big maps!
  (reduce (fn [acc n]
            (-> acc
                (merge {(keyword (str "k" n))
                        {:a (gen-str)
                         :b (gen-str)
                         :c (gen-str)
                         :d (gen-str)
                         :e (gen-str)
                         :f (gen-str)}})))
          {}
          (range 100))

  ; Generate many defs!
  (reduce (fn [acc n]
            (-> acc
                (conj (list (symbol "def") 
                            (symbol (str "foo-" n))
                            {:a (gen-str)
                             :b (gen-str)
                             :c (gen-str)
                             :d (gen-str)
                             :e (gen-str)
                             :f (gen-str)}))))
          []
          (range 1000)))