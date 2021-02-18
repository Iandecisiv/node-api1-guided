### Node API1 Guided Notes

+ Order of operations for basic server creation:
    + Tell the browser this is a successful response
    + Tell the browser to render the response as HTML
    + Send the data
    + After the write is done, send response and end with res.end()
+ When running the server, to process hangs unless otherwise told to stop listening.
+ The server should be implimented seperate from the startiing of the server.
    + First server should be defined
    + Then exported
    + Then start server outside of the define and export in a different file
+ You do not have to specify the file type for your import, but it is best practice.
+ When installing dependencies, typing "--save" after will ensure that the dependencies being installed will be added to the dependencies list in the package.json file.
+ RPC is a way to call backend functions from the front end.
+ Using Express, we can set route peramiters by giving the route a name with a : .
    + Example: server.get("/users/:id")
+ Application Programming Interface (API) is Software that makes some of its functions avalible to external programs.
+ Every API should be able to Create, Read, Update, and Delete resources.
+ API request methods:
    + GET - The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
    + HEAD - The HEAD method asks for a response identical to that of a GET request, but without the response body.
    + POST - The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.
    + PUT - The PUT method replaces all current representations of the target resource with the request payload.
    + DELETE - The DELETE method deletes the specified resource.
    + CONNECT - The CONNECT method establishes a tunnel to the server identified by the target resource.
    + OPTIONS - The OPTIONS method is used to describe the communication options for the target resource.The OPTIONS method is used to describe the communication options for the target resource.
    + TRACE - The TRACE method performs a message loop-back test along the path to the target resource.
    + PATCH - The PATCH method is used to apply partial modifications to a resource.
+ By default, the browser can only make GET Requests. Therefor we must use a REST Client such as PostMan or Insomnia to test endpoints other than Get.