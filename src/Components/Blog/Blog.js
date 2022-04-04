import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <div className="py-16 bg-purple-200">
        <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-2">
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <h3 className="text-3xl font-semibold text-purple-900">
                  React Context API
                </h3>
                <p className="mb-6 text-2xl">
                  The React Context API is a way for a React app to effectively
                  produce global variables that can be passed around. This is
                  the alternative to "prop drilling" or moving props from
                  grandparent to child to parent, and so on. Context is also
                  touted as an easier, lighter approach to state management
                  using Redux.
                </p>
                <Link to="#" className="block font-medium text-purple-600">
                  Know more
                </Link>
              </div>
              <img
                src="https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg"
                className="w-2/3 ml-auto -mb-12"
                alt="illustration"
                loading="lazy"
                width="900"
                height="600"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <h3 className="text-3xl font-semibold text-purple-900">
                  Inline Blocks and Inline Element
                </h3>
                <p className="mb-6 text-2xl">
                  A block-level element always starts on a new line, and the
                  browsers automatically add some space (a margin) before and
                  after the element. A block-level element always takes up the
                  full width available .
                </p>
                <Link to="#" className="block font-medium text-purple-600">
                  Know more
                </Link>
              </div>
              <img
                src="https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg"
                className="w-2/3 ml-auto"
                alt="illustration"
                loading="lazy"
                width="900"
                height="600"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <h3 className="text-3xl font-semibold text-purple-900">
                  Semantic Tags
                </h3>
                <p className="mb-6 text-2xl">
                  HTML5 introduced a consistent list of semantic elements to
                  help search engines and developers. HTML5 semantic tags define
                  the purpose of the element. By using semantic markup, you help
                  the browser understand the meaning of the content instead of
                  just displaying it. there are..
                  <br />
                  <small>Header</small>
                  <br />
                  <small>Main</small>
                  <br />
                  <small>Articles</small>
                  <br />
                  <small>section</small>
                  <br />
                </p>
                <Link to="#" className="block font-medium text-purple-600">
                  Know more
                </Link>
              </div>
              <img
                src="https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg"
                className="w-2/3 ml-auto"
                alt="illustration"
                loading="lazy"
                width="900"
                height="600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
