<!-- page_number: true -->

# Things that didn't fit into Ignite style of 20 slides

![](http://img.ifcdn.com/images/322054ab174d52b1e2ff965dafedf6eaf9979998e6a3bf3aaf84326d1e1f82bb_1.gif)

---

# What are CSS Modules?

index.js
```
import style from "./style"

render() {
  <div class={style.rounded}>
}

```

style.css (or LESS, Sass etc)
``` css
.rounded {
  display: block;
  background: #FFF;
  margin: 0px auto 0 auto;
  border-radius: 8px;
  padding: 10px;
}
```

https://github.com/css-modules/css-modules

---

# What are Styled Components?
(CSS in JavaScript)

```js
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`;

render(
  <Title>
    Hello World, this is my first styled component!
  </Title>
);

