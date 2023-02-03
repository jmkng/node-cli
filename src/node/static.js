/**
 * @file Define a Static class, which extends Node and describes a type of file that does
 * not need to become a page, but should be included in the build and potentially processed
 * by middleware.
 */

import Node from "./node";

class Static extends Node {

}

export default Static;