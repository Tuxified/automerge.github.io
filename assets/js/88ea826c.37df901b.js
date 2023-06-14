"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2074],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7416:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={},p="Runtime",s={unversionedId:"how-it-works/runtime",id:"how-it-works/runtime",isDocsHomePage:!1,title:"Runtime",description:"Operation Set",source:"@site/docs/how-it-works/runtime.md",sourceDirName:"how-it-works",slug:"/how-it-works/runtime",permalink:"/docs/how-it-works/runtime",editUrl:"https://github.com/automerge/automerge.github.io/edit/main/docs/how-it-works/runtime.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Binary Document Format",permalink:"/docs/how-it-works/binary-format"},next:{title:"Storage",permalink:"/docs/how-it-works/storage"}},c=[{value:"Operation Set",id:"operation-set",children:[],level:2},{value:"Operation Tree",id:"operation-tree",children:[],level:2},{value:"Map",id:"map",children:[{value:"Basic Idea",id:"basic-idea",children:[],level:3},{value:"OpTree of Map Object",id:"optree-of-map-object",children:[],level:3},{value:"Example",id:"example",children:[],level:3},{value:"get",id:"get",children:[],level:3},{value:"put",id:"put",children:[],level:3},{value:"delete",id:"delete",children:[],level:3},{value:"put_object",id:"put_object",children:[],level:3},{value:"Merge two documents",id:"merge-two-documents",children:[],level:3}],level:2},{value:"List",id:"list",children:[{value:"get",id:"get-1",children:[],level:3},{value:"delete",id:"delete-1",children:[],level:3},{value:"put",id:"put-1",children:[],level:3},{value:"insert",id:"insert",children:[],level:3},{value:"Merge two documents",id:"merge-two-documents-1",children:[],level:3}],level:2},{value:"Reference",id:"reference",children:[],level:2}],d={toc:c},u="wrapper";function m(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)(u,(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"runtime"},"Runtime"),(0,o.kt)("h2",{id:"operation-set"},"Operation Set"),(0,o.kt)("p",null,"Operation Set (OpSet), as the name suggested, is a set of operations. It is the runtime data structure of Automerge, that enables the creation, retrieval, updating, and deletion of objects. The merging of two documents is conceptually the union of two operation sets."),(0,o.kt)("p",null,"Everytime we update, delete or create an object, we insert an operation into the OpSet. And the retrieval of an object is actually the retrieval of an operation of the OpSet."),(0,o.kt)("p",null,"Every operation in the operation set is associated with a timestamp which indicates the causal order of the operation. We use ",(0,o.kt)("inlineCode",{parentName:"p"},"<couter, actorID>"),' as the timestamp, which is a Lamport clock.  In Automerge, the term "actor" is used instead of "replica", but the two are essentially interchangeable. For the remainder of the document, we will refer to the timestamp of an operation as ',(0,o.kt)("inlineCode",{parentName:"p"},"OpId")," (Operation ID)."),(0,o.kt)("p",null,"Every Map or List object has an object ID, which is the OpId of the operation that creates the object. We use object ID to uniquelly identify an object in an Automerge document. The object ID of root is ",(0,o.kt)("inlineCode",{parentName:"p"},"<0, 0>"),"."),(0,o.kt)("h2",{id:"operation-tree"},"Operation Tree"),(0,o.kt)("p",null,"With the growing number of operations in the OpSet, the time consumed for retrieval grows too. Therefore, we divided the OpSet into multiple Operation Tree (OpTree). An OpTree represents the set of operations associated with a specific object, so the number of OpTrees in an OpSet is equivalent to the number of objects in a document."),(0,o.kt)("p",null,'The reason why we use the term "Tree" is that we use a B-Tree to store it. But conceptually it is a table of operations.'),(0,o.kt)("h2",{id:"map"},"Map"),(0,o.kt)("p",null,"We can begin with a document that includes the Map objects but excludes the List objects."),(0,o.kt)("h3",{id:"basic-idea"},"Basic Idea"),(0,o.kt)("p",null,"Every time we insert a property into a map object, we create an operation like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Operation = {\n    OpId: lamport clock after increment,\n    ObjId: the objId of the map we\'re manipulating,\n    Prop: the property name,\n    action: "set {someValue}",\n}\n')),(0,o.kt)("p",null,"For example, if we do ",(0,o.kt)("inlineCode",{parentName:"p"},"root.key = A"),"\uff0cthen we need to insert an operation like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    OpId: <1, 0>\n    ObjId: <0, 0>\n    Prop: "key",\n    action: "set A"\n}\n')),(0,o.kt)("p",null,"When we query a property of a Map object, we simply retrieve the operation manipulating the Map object with highest OpId. That is to say, if we have two operations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[\n    {\n        OpId: <1, 0>\n        ObjId: <0, 0>\n        Prop: "key",\n        action: "set A"\n    },\n    {\n        OpId: <2, 0>\n        ObjId: <0, 0>\n        Prop: "key",\n        action: "set B"\n    }\n]\n')),(0,o.kt)("p",null,"In this case, ",(0,o.kt)("inlineCode",{parentName:"p"},'root.get("key")')," will return the operation ",(0,o.kt)("inlineCode",{parentName:"p"},"<2, 0>"),", and then we can know the value of root.key is ",(0,o.kt)("inlineCode",{parentName:"p"},"B"),"."),(0,o.kt)("h3",{id:"optree-of-map-object"},"OpTree of Map Object"),(0,o.kt)("p",null,"To organize the operations, we use a table, which is OpTree to store the operations associated with a particular object. And the operations in a Map object's OpTree are sorted by two columns:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Prop: Operations with the same property are grouped together."),(0,o.kt)("li",{parentName:"ol"},"OpId: If two operations have the same ",(0,o.kt)("inlineCode",{parentName:"li"},"prop"),", the operation with the lower ",(0,o.kt)("inlineCode",{parentName:"li"},"OpId")," is placed before the other.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Since an OpTree is sorted by keys, we can use binary search to locate an operation with a particular key, which we will explore in more detail shortly.")),(0,o.kt)("p",null,'Furthermore, there are two additional columns we have not mentioned before: successor and predecessor. In a map object, if operation A is to override another operation B, then we say operation A is a successor of operation B. We can now define an operation as "invisible" if it has a successor.'),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Let\u2018s say we have a code snippet in the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let mut doc = Automerge::new();\nlet mut tx = doc.transaction();\ntx.put(ROOT, "name", "Alice")?;\ntx.put(ROOT, "age", "21")?;\ntx.put(ROOT, "age", "23")?;\ntx.put(ROOT, "age", "24")?;\ntx.put(ROOT, "name", "Bob")?;\ntx.commit();\n')),(0,o.kt)("p",null,"It will result in an OpTree like this:"),(0,o.kt)("img",{src:n(8531).Z,width:"60%"}),(0,o.kt)("p",null,"To query and delete an object in a OpTree, we could use the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let mut tx = doc.transaction();\nlet name = tx.get(ROOT, "name")?;\ntx.delete(ROOT, "age")?;\ntx.commit();\n')),(0,o.kt)("p",null,"Let's explain how get, put and delete works in pseudocode. "),(0,o.kt)("h3",{id:"get"},"get"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'def get(table, prop):\n    operations, _ := search(table, prop);\n    last := operations[opertaions.len - 1];\n    return last.action.value;\n\ndef search(table, prop):\n    result := [];\n    last_index = -1; // "index of the last operation in the result" + 1\n    start_idx := index of the first row that matches `prop` // binary search\n    end_idx := index of the last row of the `table`\n    for i in range(start_idx, end_idx):\n        if table[i].prop != prop:\n            return result, i;\n        if table[i].visible:\n            result.append(table[i]);\n    return result, end_idx + 1;\n')),(0,o.kt)("p",null,"Let's consider an example of ",(0,o.kt)("inlineCode",{parentName:"p"},'get(root, "name")'),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Initially, we use binary search to locate the starting position of the row where the ",(0,o.kt)("inlineCode",{parentName:"li"},"prop"),' is "name", which is the row with index 3 in the figure above. Thus:')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"start_idx = 3;\nend_idx = 4;\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"We iterate through ",(0,o.kt)("inlineCode",{parentName:"p"},"table[3]")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"table[4]")," and append ",(0,o.kt)("inlineCode",{parentName:"p"},"op 5@actor0")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"result"),". Eventually, the ",(0,o.kt)("inlineCode",{parentName:"p"},"search")," function returns ",(0,o.kt)("inlineCode",{parentName:"p"},"([op 5@actor0], 5)"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Finally, in the ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," function, we return the ",(0,o.kt)("inlineCode",{parentName:"p"},"action.value")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"op 5@actor0"),", and as a result, we obtain the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"root.name"),', which is "Bob".'))),(0,o.kt)("h3",{id:"put"},"put"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'def put(table, prop, value):\n    operations, last_idx := search(table, prop)\n    pred := []\n    for operation in operations:\n        pred.append(operation.op)\n        \n    local_op := {\n        op: lamport_clock_inc(),\n        obj: table.objId,\n        prop,\n        action: "set {value}",\n        pred,\n        succ: []\n    }\n    \n    add_succ(local_op.pred, local_op.op);\n    insert_op(local_op, last_idx);\n')),(0,o.kt)("p",null,"Let's consider an example of ",(0,o.kt)("inlineCode",{parentName:"p"},'put(root, "name", "Carol")'),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Initially, we use the ",(0,o.kt)("inlineCode",{parentName:"li"},"search")," function to search for the predecessor and index, and it returns ",(0,o.kt)("inlineCode",{parentName:"li"},"([op 5@actor0], 5)"),"."),(0,o.kt)("li",{parentName:"ol"},"Next, a successor is added for ",(0,o.kt)("inlineCode",{parentName:"li"},"op 5@actor0"),", which is ",(0,o.kt)("inlineCode",{parentName:"li"},"6@actor0"),"."),(0,o.kt)("li",{parentName:"ol"},"Finally, ",(0,o.kt)("inlineCode",{parentName:"li"},"op 6@actor0")," is inserted at index 5 of the ",(0,o.kt)("inlineCode",{parentName:"li"},"table"),".")),(0,o.kt)("img",{src:n(3064).Z,width:"60%"}),(0,o.kt)("h3",{id:"delete"},"delete"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"def delete(table, prop):\n    operations, _ := search(table, prop)\n    pred := []\n    for operation in operations:\n        pred.append(operation.op)\n    new_clock := lamport_clock_inc()\n    add_succ(pred, new_clock)\n")),(0,o.kt)("p",null,"Let's consider an example of ",(0,o.kt)("inlineCode",{parentName:"p"},'delete(root, "age")'),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"We use the ",(0,o.kt)("inlineCode",{parentName:"li"},"search")," function to find all currently visible operations where ",(0,o.kt)("inlineCode",{parentName:"li"},"prop")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"age"),", and it returns ",(0,o.kt)("inlineCode",{parentName:"li"},"([4@actor0], 3)"),"."),(0,o.kt)("li",{parentName:"ol"},"We update the successor of ",(0,o.kt)("inlineCode",{parentName:"li"},"4@actor0")," to the newly generated ",(0,o.kt)("inlineCode",{parentName:"li"},"OpId"),".")),(0,o.kt)("img",{src:n(9166).Z,width:"60%"}),(0,o.kt)("p",null,"At this point, when we execute ",(0,o.kt)("inlineCode",{parentName:"p"},'get(root, "age")'),", all operations where ",(0,o.kt)("inlineCode",{parentName:"p"},"prop = age")," are invisible, so an empty result will be returned, and as a result, ",(0,o.kt)("inlineCode",{parentName:"p"},"age")," is deleted."),(0,o.kt)("h3",{id:"put_object"},"put_object"),(0,o.kt)("p",null,"In order to create a nested map, we also need to support the ",(0,o.kt)("inlineCode",{parentName:"p"},"put_object")," operation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'def put_object(table, prop, obj_type):\n    operations, last_idx := search(table, prop)\n    pred := []\n    for operation in operations:\n        pred.append(operation.op)\n        \n    new_obj_id := lamport_clock_inc();\n    local_op := {\n        op: new_obj_id;\n        obj: table.objId,\n        prop,\n        action: "make {obj_type}",\n        pred,\n        succ: []\n    }\n    \n    add_succ(local_op.pred, local_op.op);\n    insert_op(local_op, last_idx);\n    return new_obj_id;\n')),(0,o.kt)("p",null,"For example, consider the following code snippet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'contact := put_object(root, "contact", Map);\nput(contact, "email", "alice@example.com");\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Call the ",(0,o.kt)("inlineCode",{parentName:"li"},"search")," function, which returns ",(0,o.kt)("inlineCode",{parentName:"li"},"([], 3)")," since no contacts exist at the moment."),(0,o.kt)("li",{parentName:"ol"},"Generate a ",(0,o.kt)("inlineCode",{parentName:"li"},"make map")," operation and add it to index 3 of the table."),(0,o.kt)("li",{parentName:"ol"},"Function ",(0,o.kt)("inlineCode",{parentName:"li"},"put_object")," returns the OpId ",(0,o.kt)("inlineCode",{parentName:"li"},"6@actor0"),", which is the object id of the newly created map."),(0,o.kt)("li",{parentName:"ol"},"Using object id ",(0,o.kt)("inlineCode",{parentName:"li"},"6@actor0"),", we can access the OpTree of ",(0,o.kt)("inlineCode",{parentName:"li"},"contact")," and insert the ",(0,o.kt)("inlineCode",{parentName:"li"},'put, email, set "alice@example.com"')," operation into it.")),(0,o.kt)("img",{src:n(5971).Z,width:"100%"}),(0,o.kt)("h3",{id:"merge-two-documents"},"Merge two documents"),(0,o.kt)("p",null,"Merging two documents is equivalent to merging the operations of the two documents and updating the successors if necessary."),(0,o.kt)("p",null,"Considering the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let mut doc1 = Automerge::new();\nlet mut tx = doc1.transaction();\ntx.put(ROOT, "name", "Alice").unwrap();\ntx.put(ROOT, "age", "21").unwrap();\ntx.put(ROOT, "age", "22").unwrap();\ntx.commit();\n\nlet mut doc2 = doc1.fork();\n\nlet mut tx = doc1.transaction();\ntx.put(ROOT, "age", "100").unwrap();\ntx.commit();\n\nlet mut tx = doc2.transaction();\ntx.put(ROOT, "age", "99").unwrap();\ntx.commit();\n\ndoc1.merge(&mut doc2)?;\nlet mut tx = doc1.transaction();\n\nlet res = tx.get(ROOT, "age")?;\nprintln!("{:?}", res); // print 99\ntx.commit();\n')),(0,o.kt)("p",null,"Before merging, ",(0,o.kt)("inlineCode",{parentName:"p"},"doc1")," might look like this:"),(0,o.kt)("img",{src:n(2577).Z,width:"60%"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"doc2")," might look like this:"),(0,o.kt)("img",{src:n(5122).Z,width:"60%"}),(0,o.kt)("p",null,"After merging, the resulting document might look like this:"),(0,o.kt)("img",{src:n(7466).Z,width:"60%"}),(0,o.kt)("p",null,"In this case, we merge two documents by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"4@actor1")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"doc2")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"doc1"),", which is missing from ",(0,o.kt)("inlineCode",{parentName:"p"},"doc1"),". Then, since the predecessor of ",(0,o.kt)("inlineCode",{parentName:"p"},"4@actor1")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"3@actor0"),", we need to add ",(0,o.kt)("inlineCode",{parentName:"p"},"4@actor1")," to the successors group of ",(0,o.kt)("inlineCode",{parentName:"p"},"3@actor0"),"."),(0,o.kt)("p",null,"At this point, if you call ",(0,o.kt)("inlineCode",{parentName:"p"},'get("age")'),", the search function will return two operations, ",(0,o.kt)("inlineCode",{parentName:"p"},"4@actor1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"4@actor0"),". Since the ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," function takes the last operation as the result, it returns ",(0,o.kt)("inlineCode",{parentName:"p"},"4@actor1"),", which prints out 99 as the final result."),(0,o.kt)("p",null,"Furthermore, we have a function called ",(0,o.kt)("inlineCode",{parentName:"p"},"get_all"),", which we can describe as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"def get_all(table, prop):\n    operations, _ := search(table, prop);\n    res = [];\n    for op in operations:\n        res.append(op.action.value);\n    return res\n")),(0,o.kt)("p",null,"In this example, calling ",(0,o.kt)("inlineCode",{parentName:"p"},"get_all(age)")," will retrieve both ",(0,o.kt)("inlineCode",{parentName:"p"},"99")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"100"),". It behaves as a multi-value register."),(0,o.kt)("h2",{id:"list"},"List"),(0,o.kt)("p",null,"Now we will add the List object to our document. Before we explain how to generate list operations, you need to understand what a Replicated Growable Array is ",(0,o.kt)("a",{parentName:"p",href:"#refer-anchor-1"},(0,o.kt)("sup",null,"1")),"."),(0,o.kt)("p",null,"We need to flatten the RGA tree into a table, just like what we did in Map. This is achieved by performing a Depth First Search (DFS) on the RGA tree. For example, for the following code snippet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let mut doc1 = Automerge::new();\nlet mut tx = doc1.transaction();\nlet list = tx.put_object(ROOT, "list", ObjType::List)?;\ntx.insert(&list, 0, "a")?;\ntx.insert(&list, 1, "u")?;\ntx.insert(&list, 2, "o")?;\ntx.insert(&list, 2, "t")?;\ntx.put(&list, 0, "A")?;\ntx.commit();\n')),(0,o.kt)("p",null,"We can build the RGA tree like this:"),(0,o.kt)("img",{src:n(3560).Z,width:"30%"}),(0,o.kt)("p",null,"We use DFS to traverse all nodes of the RGA tree and obtain the following table:"),(0,o.kt)("img",{src:n(6623).Z,width:"60%"}),(0,o.kt)("p",null,"However, the RGA tree is only a conceptual model, and we do not actually maintain a tree in memory. Next, we will describe in pseudocode how to perform get, delete, put, and insert on this table."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'Note: the definition of "index" can be confusing when used to refer to both the index of a table and the index of a list interchangeably. To prevent confusion, we will use the term "row number" to indicate the index of a table, while reserving the term "index" specifically for the index of a list.')),(0,o.kt)("h3",{id:"get-1"},"get"),(0,o.kt)("p",null,"Before diving into the ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," function, it's important to note that in the actual implementation of Automerge, tables are implemented using B-trees. This allows for faster query processing. Specifically, we can maintain a variable  ",(0,o.kt)("inlineCode",{parentName:"p"},"visible"),"  in each node that indicates how many visible elements are in the subtree rooted at that node. If we determine that the element we are looking for is definitely not in the current subtree, we can skip the current subtree entirely."),(0,o.kt)("p",null,"However, for the sake of simplicity in describing the algorithm, we will assume that no subtrees are skipped. If you are interested in adapating the algorithms to B-Tree, you can delve into the source code for a more detailed understanding."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"def get(table, index):\n    operations, _ := nth(table, index);\n    last := operations[operations.len - 1];\n    return last.action.value;\n    \ndef nth(table, index):\n    // last element we've ever seen\n    last_seen = null;\n    // number of elements in array we've ever seen \n    seen = 0; \n    // current position\n    pos := 0;\n    // result operations\n    res = [];\n    \n    \n    for operation in table:\n    \n        // If the operation is \"insert\", we may have a new element traversed (although it's also possible that it's not an element due to a preceding \"delete\" operation), and in that case, we need to clear the \"last_seen\" variable.\n        \n        if operation is insert:\n        \n        // If we've already seen enough elements, we should return the result\n        \n            if seen > index:\n                return res, pos;\n            last_seen = null;\n        \n        \n        // it could be a visible insert operation, or a visible put operation\n        if operation is visible && last_seen is null:\n            seen += 1;\n            last_seen = operation;\n        \n        // if `seen` is greater than `index`, the current operation is what we're searching for\n        if operation is visible && seen > index:\n            res.append(operation);\n        \n        pos++;\n    \n    return res, pos;\n            \n        \n            \n")),(0,o.kt)("p",null,"Considering ",(0,o.kt)("inlineCode",{parentName:"p"},"get(list, 2)")," as an example:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start iterating from the beginning and when we reach index 4, ",(0,o.kt)("inlineCode",{parentName:"li"},"seen")," is equal to 3. So we add ",(0,o.kt)("inlineCode",{parentName:"li"},"operation 5@actor0")," to the ",(0,o.kt)("inlineCode",{parentName:"li"},"res")," list."),(0,o.kt)("li",{parentName:"ol"},"Return the result, which is ",(0,o.kt)("inlineCode",{parentName:"li"},"([5@actor0], 4)"),"."),(0,o.kt)("li",{parentName:"ol"},"By reading the value of ",(0,o.kt)("inlineCode",{parentName:"li"},"operation 5@actor0"),", we get the final result ",(0,o.kt)("inlineCode",{parentName:"li"},"t"),".")),(0,o.kt)("h3",{id:"delete-1"},"delete"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"def delete(table, index):\n    operations, _ := nth(table, index);\n    pred := []\n    for operation in operations:\n        pred.append(operation.op)\n    add_succ(pred, lamport_clock_inc());\n")),(0,o.kt)("p",null,"Considering ",(0,o.kt)("inlineCode",{parentName:"p"},"delete(list, 3)")," as an example:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"By calling the ",(0,o.kt)("inlineCode",{parentName:"li"},"nth")," function, we obtain ",(0,o.kt)("inlineCode",{parentName:"li"},"([5@actor0], 4)"),"."),(0,o.kt)("li",{parentName:"ol"},"We updated the successor of ",(0,o.kt)("inlineCode",{parentName:"li"},"5@actor0")," to the newly generated OpId ",(0,o.kt)("inlineCode",{parentName:"li"},"7@actor0"),".")),(0,o.kt)("img",{src:n(3408).Z,width:"60%"}),(0,o.kt)("h3",{id:"put-1"},"put"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'def put(table, index, value):\n    operations, pos := nth(table, index);\n    first := operations[0];\n    \n    if first is insert:\n        prop := first.op;\n    else:\n        prop := first.prop;\n\n    \n    pred := []\n    for operation in operations:\n        pred.append(operation.op)\n        \n    local_op := {\n        op: lamport_clock_inc(),\n        obj: table.objId, \n        prop,\n        action: "set {value}",\n        succ: null, \n        pred,\n        insert: false,\n    }\n    \n    add_succ(pred, local_op.op);\n    insert_op(local_op, pos);\n')),(0,o.kt)("p",null,"Considering ",(0,o.kt)("inlineCode",{parentName:"p"},'put(2, "T")')," as an example:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"By calling the ",(0,o.kt)("inlineCode",{parentName:"li"},"nth")," function, we obtain ",(0,o.kt)("inlineCode",{parentName:"li"},"([5@actor0], 4)"),"."),(0,o.kt)("li",{parentName:"ol"},"Add successor for ",(0,o.kt)("inlineCode",{parentName:"li"},"op 5@actor0"),", which is ",(0,o.kt)("inlineCode",{parentName:"li"},"7@actor0"),"."),(0,o.kt)("li",{parentName:"ol"},"Finally, ",(0,o.kt)("inlineCode",{parentName:"li"},"op 7@actor0")," is inserted at row number 4 of the table.")),(0,o.kt)("img",{src:n(7472).Z,width:"60%"}),(0,o.kt)("h3",{id:"insert"},"insert"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'def insert(table, index, value):\n    insert_row_number, insert_prop := insert_nth(table, index);\n    local_op := {\n        op: lamport_clock_inc(),\n        obj: table.objId,\n        prop: insert_prop,\n        action: "set {value}",\n        succ: null,\n        pred: null,\n    };\n    insert_op(local_op, insert_row_number);\n    \ndef insert_nth(table, index):\n    // row number to be inserted at\n    insert_row_number := -1;\n    // prop of the operation to be inserted\n    insert_prop := null;\n    \n    // last element we\'ve ever seen\n    last_seen := null\n    // number of elements we\'ve ever seen \n    seen := 0\n    \n    // current position\n    pos := 0\n    \n    for operation in table:\n    \n        // If the operation is "insert", we may have a new element traversed (although it\'s also possible that it\'s not an element due to a preceding "delete" operation), and in that case, we need to clear the "last_seen" variable.\n        \n        if operation is insert:\n            \n            // If we\'ve already seen enough elements, the current position is the position to be inserted at\n            if insert_row_number == -1 && seen >= index: // greater than or equal\n                insert_row_number = pos;\n            \n            last_seen = null;\n        \n        // it could be a visible insert operation, or a visible put operation\n        // update seen, last_seen and insert_prop \n        if operation is visible && last_seen is null:\n        \n            // if we\'ve already seen enough elements, return the insert index and prop\n            if seen > index:\n                return insert_row_number, insert_prop\n            seen += 1;\n            \n        \n            last_seen = operation;\n            \n            if operation is insert:\n                insert_prop := operation.op;\n            else:\n                insert_prop := operation.prop;\n\n        pos++;\n    // if index exceeds the table\n    insert_row_number = last row number of the table plus 1\n    insert_prop = last insert operation of the table\n    return insert_row_number, insert_prop\n                \n')),(0,o.kt)("p",null,"Considering ",(0,o.kt)("inlineCode",{parentName:"p"},'insert(3, "a")')," as an example:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"When iterating to index 3, update the ",(0,o.kt)("inlineCode",{parentName:"li"},"insert_prop")," as ",(0,o.kt)("inlineCode",{parentName:"li"},"5@actor0"),"."),(0,o.kt)("li",{parentName:"ol"},"When iterating to index 4, update the ",(0,o.kt)("inlineCode",{parentName:"li"},"insert_row_number")," as 4."),(0,o.kt)("li",{parentName:"ol"},"Construct an insert operation and insert it at row number 4.")),(0,o.kt)("img",{src:n(3030).Z,width:"60%"}),(0,o.kt)("h3",{id:"merge-two-documents-1"},"Merge two documents"),(0,o.kt)("p",null,"Like in maps, merging two documents is conceptually taking the union of two OpSets. Let's consider the following code snippet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let mut doc1 = Automerge::new();\nlet mut tx = doc1.transaction();\n\n// auto\nlet list = tx.put_object(ROOT, "list", ObjType::List)?;\ntx.insert(&list, 0, "a")?;\ntx.insert(&list, 1, "u")?;\ntx.insert(&list, 2, "o")?;\ntx.insert(&list, 2, "t")?;\ntx.put(&list, 0, "A")?;\ntx.commit();\n\n// matic\nlet mut doc2 = doc1.fork();\nlet mut tx = doc2.transaction();\ntx.insert(&list, 4, "m")?;\ntx.insert(&list, 5, "a")?;\ntx.insert(&list, 6, "t")?;\ntx.insert(&list, 7, "i")?;\ntx.insert(&list, 8, "c")?;\ntx.commit();\n\n// merge\nlet mut tx = doc1.transaction();\ntx.insert(&list, 4, "m")?;\ntx.insert(&list, 5, "e")?;\ntx.insert(&list, 6, "r")?;\ntx.insert(&list, 7, "g")?;\ntx.insert(&list, 8, "e")?;\ntx.commit();\n\n// automaticmerge\ndoc1.merge(&mut doc2)?;\nfor (i, val1, id) in doc1.list_range(&list, ..) {\n    let val2 = doc1.get(&list, i)?;\n    println!("{:?}", val2);\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"doc1")," before merging:"),(0,o.kt)("img",{src:n(8436).Z,width:"60%"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"doc2")," before merging:"),(0,o.kt)("img",{src:n(4561).Z,width:"60%"}),(0,o.kt)("p",null,"After merging:"),(0,o.kt)("img",{src:n(7803).Z,width:"60%"}),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("div",{id:"refer-anchor-1"}),(0,o.kt)("p",null,"[1]"," H.-G. Roh, M. Jeon, J.-S. Kim, and J. Lee, \u201cReplicated abstract data types: Building Blocks for Collaborative Applications,\u201d ",(0,o.kt)("em",{parentName:"p"},"Journal of Parallel and Distributed Computing"),", vol. 71, no. 3, pp. 354\u2013368, 2011. doi:10.1016/j.jpdc.2010.12.006"))}m.isMDXComponent=!0},8531:function(e,t,n){t.Z=n.p+"assets/images/runtime1-7aeb194ba145282f4f33c26bdbb37470.png"},3408:function(e,t,n){t.Z=n.p+"assets/images/runtime10-a4a0b9fbaf7c56fec9a8cec5e82ac2ab.png"},7472:function(e,t,n){t.Z=n.p+"assets/images/runtime11-38a176f09354bbd5244b8c0a88cb164f.png"},3030:function(e,t,n){t.Z=n.p+"assets/images/runtime12-36c01b6edc269b9bae862834a56acf7c.png"},8436:function(e,t,n){t.Z=n.p+"assets/images/runtime13-5323782f735c18e7167f6852961b92e3.png"},4561:function(e,t,n){t.Z=n.p+"assets/images/runtime14-6125040d247c128740471a5b6b95705a.png"},7803:function(e,t,n){t.Z=n.p+"assets/images/runtime15-cfe41165cb124759d4456da414d1815c.png"},3064:function(e,t,n){t.Z=n.p+"assets/images/runtime2-b4c475a7cb33bb8d760dc22c6ee81bd5.png"},9166:function(e,t,n){t.Z=n.p+"assets/images/runtime3-3719bf773a2b7db35f8b35daf5242325.png"},5971:function(e,t,n){t.Z=n.p+"assets/images/runtime4-a27bb5b9517037fee5693d01ebb2bb15.png"},2577:function(e,t,n){t.Z=n.p+"assets/images/runtime5-0ddcf636262f667e90905740f4468711.png"},5122:function(e,t,n){t.Z=n.p+"assets/images/runtime6-52f28bad161c08226caec1b1967f7e84.png"},7466:function(e,t,n){t.Z=n.p+"assets/images/runtime7-141d0aebb1afdfed94e22007730ff4cf.png"},3560:function(e,t,n){t.Z=n.p+"assets/images/runtime8-1a7914bdecbd4c9cf94896bb85dfbd91.png"},6623:function(e,t,n){t.Z=n.p+"assets/images/runtime9-1cfba6c90d75ec7502c197c611fd59b1.png"}}]);