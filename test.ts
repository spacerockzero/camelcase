import { assertEqual, test, runTests } from "https://deno.land/x/testing/mod.ts";
import { camelCase } from "mod.ts";

test({name: "camelCase", fn: () => {
  assertEqual(camelCase("foo"), "foo");
  assertEqual(camelCase("foo-bar"), "fooBar");
  assertEqual(camelCase("foo-bar-baz"), "fooBarBaz");
  assertEqual(camelCase("foo--bar"), "fooBar");
  assertEqual(camelCase("--foo-bar"), "fooBar");
  assertEqual(camelCase("--foo--bar"), "fooBar");
  assertEqual(camelCase("FOO-BAR"), "fooBar");
  assertEqual(camelCase("FOÈ-BAR"), "foèBar");
  assertEqual(camelCase("-foo-bar-"), "fooBar");
  assertEqual(camelCase("--foo--bar--"), "fooBar");
  assertEqual(camelCase("foo.bar"), "fooBar");
  assertEqual(camelCase("foo..bar"), "fooBar");
  assertEqual(camelCase("..foo..bar.."), "fooBar");
  assertEqual(camelCase("foo_bar"), "fooBar");
  assertEqual(camelCase("__foo__bar__"), "fooBar");
  assertEqual(camelCase("__foo__bar__"), "fooBar");
  assertEqual(camelCase("foo bar"), "fooBar");
  assertEqual(camelCase("  foo  bar  "), "fooBar");
  assertEqual(camelCase("-"), "-");
  assertEqual(camelCase(" - "), "-");
  assertEqual(camelCase("fooBar"), "fooBar");
  assertEqual(camelCase("fooBar-baz"), "fooBarBaz");
  assertEqual(camelCase("foìBar-baz"), "foìBarBaz");
  assertEqual(camelCase("fooBarBaz-bazzy"), "fooBarBazBazzy");
  assertEqual(camelCase("FBBazzy"), "fbBazzy");
  assertEqual(camelCase("F"), "f");
  assertEqual(camelCase("FooBar"), "fooBar");
  assertEqual(camelCase("Foo"), "foo");
  assertEqual(camelCase("FOO"), "foo");
  assertEqual(camelCase(["foo", "bar"]), "fooBar");
  assertEqual(camelCase(["foo", "-bar"]), "fooBar");
  assertEqual(camelCase(["foo", "-bar", "baz"]), "fooBarBaz");
  assertEqual(camelCase(["", ""]), "");
  assertEqual(camelCase("--"), "");
  assertEqual(camelCase(""), "");
  assertEqual(camelCase("--__--_--_"), "");
  assertEqual(camelCase(["---_", "--", "", "-_- "]), "");
  assertEqual(camelCase("foo bar?"), "fooBar?");
  assertEqual(camelCase("foo bar!"), "fooBar!");
  assertEqual(camelCase("foo bar$"), "fooBar$");
  assertEqual(camelCase("foo-bar#"), "fooBar#");
  assertEqual(camelCase("XMLHttpRequest"), "xmlHttpRequest");
  assertEqual(camelCase("AjaxXMLHttpRequest"), "ajaxXmlHttpRequest");
  assertEqual(camelCase("Ajax-XMLHttpRequest"), "ajaxXmlHttpRequest");
  assertEqual(camelCase([]), "");
}});

test({name: "camelCase with pascalCase option", fn: () => {
  assertEqual(camelCase("foo", { pascalCase: true }), "Foo");
  assertEqual(camelCase("foo-bar", { pascalCase: true }), "FooBar");
  assertEqual(camelCase("foo-bar-baz", { pascalCase: true }), "FooBarBaz");
  assertEqual(camelCase("foo--bar", { pascalCase: true }), "FooBar");
  assertEqual(camelCase("--foo-bar", { pascalCase: true }), "FooBar");
  assertEqual(camelCase("--foo--bar", { pascalCase: true }), "FooBar");
  assertEqual(camelCase("FOO-BAR", { pascalCase: true }), "FooBar");
  assertEqual(camelCase("FOÈ-BAR", { pascalCase: true }), "FoèBar");
  assertEqual(camelCase("-foo-bar-", { pascalCase: true }), "FooBar");
  assertEqual(camelCase("--foo--bar--", { pascalCase: true }), "FooBar");
  assertEqual(camelCase("foo.bar", { pascalCase: true }), "FooBar");
  assertEqual(camelCase("foo..bar", { pascalCase: true }), "FooBar");
  assertEqual(camelCase("..foo..bar..", { pascalCase: true }), "FooBar");
  assertEqual(camelCase("foo_bar", { pascalCase: true }), "FooBar");
  assertEqual(camelCase("__foo__bar__", { pascalCase: true }), "FooBar");
  assertEqual(camelCase("__foo__bar__", { pascalCase: true }), "FooBar");
  assertEqual(camelCase("foo bar", { pascalCase: true }), "FooBar");
  assertEqual(camelCase("  foo  bar  ", { pascalCase: true }), "FooBar");
  assertEqual(camelCase("-", { pascalCase: true }), "-");
  assertEqual(camelCase(" - ", { pascalCase: true }), "-");
  assertEqual(camelCase("fooBar", { pascalCase: true }), "FooBar");
  assertEqual(camelCase("fooBar-baz", { pascalCase: true }), "FooBarBaz");
  assertEqual(camelCase("foìBar-baz", { pascalCase: true }), "FoìBarBaz");
  assertEqual(
    camelCase("fooBarBaz-bazzy", { pascalCase: true }),
    "FooBarBazBazzy"
  );
  assertEqual(camelCase("FBBazzy", { pascalCase: true }), "FbBazzy");
  assertEqual(camelCase("F", { pascalCase: true }), "F");
  assertEqual(camelCase("FooBar", { pascalCase: true }), "FooBar");
  assertEqual(camelCase("Foo", { pascalCase: true }), "Foo");
  assertEqual(camelCase("FOO", { pascalCase: true }), "Foo");
  assertEqual(camelCase(["foo", "bar"], { pascalCase: true }), "FooBar");
  assertEqual(camelCase(["foo", "-bar"], { pascalCase: true }), "FooBar");
  assertEqual(
    camelCase(["foo", "-bar", "baz"], { pascalCase: true }),
    "FooBarBaz"
  );
  assertEqual(camelCase(["", ""], { pascalCase: true }), "");
  assertEqual(camelCase("--", { pascalCase: true }), "");
  assertEqual(camelCase("", { pascalCase: true }), "");
  assertEqual(camelCase("--__--_--_", { pascalCase: true }), "");
  assertEqual(camelCase(["---_", "--", "", "-_- "], { pascalCase: true }), "");
  assertEqual(camelCase("foo bar?", { pascalCase: true }), "FooBar?");
  assertEqual(camelCase("foo bar!", { pascalCase: true }), "FooBar!");
  assertEqual(camelCase("foo bar$", { pascalCase: true }), "FooBar$");
  assertEqual(camelCase("foo-bar#", { pascalCase: true }), "FooBar#");
  assertEqual(
    camelCase("XMLHttpRequest", { pascalCase: true }),
    "XmlHttpRequest"
  );
  assertEqual(
    camelCase("AjaxXMLHttpRequest", { pascalCase: true }),
    "AjaxXmlHttpRequest"
  );
  assertEqual(
    camelCase("Ajax-XMLHttpRequest", { pascalCase: true }),
    "AjaxXmlHttpRequest"
  );
  assertEqual(camelCase([], { pascalCase: true }), "");
}});

runTests();
