(Based on http://code.google.com/p/tpl-engine/wiki/HowtoUsev01)

In v0.1 it is all very very basic, but it is useful to simple projects...

First things first, you need to of course download v0.1 @ our [Downloads](http://code.google.com/p/js-tpl-engine/downloads/list) section

Once thats done, simply unzip it...

### Setting up ###
Now where ever you want to use this class include it into the file, something like this:
```
<script type="text/javascript" src="tpl_engine.class.js"></script>
```

Then you must call on it and this is how you do it:
```
tpl = new Template(string $data);
```
**string** _$data_ - Supply a the default data for applying the template to (optional)

### Assigning Variables ###
You there are 2 functions, you can assign 1 variable at a time, or multiple...

To assign one, it would look something like this
```
tpl.assignVar(string $var, string $value [, bool $overwrite]);
```
**string** _$var_ - This will be the variable that will be replaced, for example, if you put in p\_title, it would replace {p\_title} in your template file with whatever value you give it. _NOTE: This **IS** case sensitive!_

**string** _$value_ - The value that will be replaced with the variable given, can be anything

**bool** _$overwrite_ - Whether or not you want to overwrite the variable if it exists or not. _This is optional, **default is false**_

Now if you want to assign more then 1 at a time, thats fine too... Its almost the same, in fact, the actual code inside the function uses the function above...
```
var vars = {
  'p_title': 'Page Title',
  'p_content': 'Page Content'
};
tpl.assignVars(object $vars [, bool $overwrite]);
```
**object** _$vars_ - An array of variables you want to have replaced

**bool** _$overwrite_ - Do you want to overwrite the variables if they exist already?

### Parsing the Template ###
Can't forget this now can we? This will get the template file and parse it.
```
tpl.parseTpl(string $tpl);
```
**string** _$tpl_ - The template contents. It's a string. Filled with arbitrary randomness of { and }

### Parsing the Template II ###
Can't forget this now can we? This will get the template file and parse it.
```
tpl.fileTpl(string $tpl [, function $output]);
```
**string** _$tpl_ - The template file name... An example of a tpl file can be found [here](http://code.google.com/p/tpl-engine/wiki/SampleTpl), the tpl file doesn't have to have an extension of .tpl, it could be .htm, .html, whatever

**function** _$output_ - The function that returns gets called after the file is loaded, parsed, murdered. (It's asynchronous)

**note** it's asynchronous. so there's no return value. And this functionality is based on my super-awesome vX ajax function (see other project).

Well! There you have it, I hope this script can help you in some way shape or form :)