package main

import (
	"fmt"
	"local/server"
)

func main() {
	fmt.Fprint("Starting server")
	// start the gin router
	server.NewServer()
}
