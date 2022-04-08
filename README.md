# Email

The Email interface is used to parse, construct, normalize, and encode emails. It works by providing properties which allow you to easily read and modify the components of an Email.

You normally create a new Email object by specifying the Email as a string when calling its constructor, or by providing a base Email. You can then easily read the parsed components of the Email or make changes to the Email.

## Constructor

<dl>
  <dt>Email()</dt>
  <dd>Creates and returns an Email object referencing the Email specified using an email string, or a base Email object.</dd>
</dl>

## Properties

<dl>
  <dt>username</dt>
  <dd>A string containing the username specified before the at (`@`) symbol.</dd>

  <dt>domain</dt>
  <dd>A string containing the domain specified after the at (`@`) symbol.</dd>

  <dt>tld</dt>
  <dd>A string containing the TLD of the domain.</dd>
</dl>

## Methods

<dl>
  <dt>toString()</dt>
  <dd>Returns a string containing the whole email.</dd>

  <dt>toJSON()</dt>
  <dd>Returns a string containing the whole email. It returns the same string as the toString() method.</dd>
</dl>

## Usage notes

The constructor takes an email parameter.

```js
let email = new Email("username@domain.tld");
console.log(email.hostname); // "domain.tld"
console.log(email.username); // "username"
```

Email properties can be set to construct the Email:

```js
email.hostname = "example.app";
console.log(email.toString()); // "username@example.app"
```

The `toString()` method of `Email` just returns the email address as a string, so the constructor can be used to normalize and encode an email directly.

The `toJSON()` method of `Email` just returns the same value of `toString()`, so the constructor can be used inside `JSON.stringify` safely and you'll get a string with the email address.

```js
JSON.stringify({ email }); // "{\"email\":\"username@example.app\"}"
```
