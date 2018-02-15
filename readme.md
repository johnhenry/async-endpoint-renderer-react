# Asynchronous Endpoint Renderer React

Use with [Async Endpoint](https://github.com/johnhenry/async-endpoint)
## Functions

<dl>
<dt><a href="#*">*([Interface], [target], [respond])</a> ⇒ <code><a href="#RenderFunction">RenderFunction</a></code></dt>
<dd><p>creates a render function that renders yeilded results from programs
to any number of target functions. If no targets are given, objects will be rendered
using &quot;console.log&quot;
Can be used as a &quot;passthrough&quot; (see &quot;createQueue&quot; example)</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#RenderFunction">RenderFunction</a> : <code>function</code></dt>
<dd><p>a function that renders data</p>
</dd>
<dt><a href="#PairedRespond">PairedRespond</a> : <code>function</code></dt>
<dd><p>a function that sends it&#39;s input to a paired PairedRequest function (see <a href="https://github.com/johnhenry/async-endpoint">https://github.com/johnhenry/async-endpoint</a>)</p>
</dd>
</dl>

<a name="*"></a>

## *([Interface], [target], [respond]) ⇒ [<code>RenderFunction</code>](#RenderFunction)
creates a render function that renders yeilded results from programs
to any number of target functions. If no targets are given, objects will be rendered
using "console.log"
Can be used as a "passthrough" (see "createQueue" example)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [Interface] | [<code>\*</code>](#*) | request function for input |
| [target] | [<code>\*</code>](#*) | dom element into which to render the |
| [respond] | [<code>PairedRespond</code>](#PairedRespond) | optional respond function for input |

**Example**  
```js
import * as React from "react";
import CreateReactRenderer from "async-endpoint-react-renderer";
const renderer = CreateRenderer(({ data }) => <React.Fragment>{data}</React.Fragment>, document.getElementById("main"))
renderer({ data: "hello world" });
//writes "hello world" to dom
```
<a name="RenderFunction"></a>

## RenderFunction : <code>function</code>
a function that renders data

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| data | [<code>\*</code>](#*) | 

<a name="PairedRespond"></a>

## PairedRespond : <code>function</code>
a function that sends it's input to a paired PairedRequest function (see https://github.com/johnhenry/async-endpoint)

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| response | [<code>\*</code>](#*) | response for request function |

