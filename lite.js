function TemplateLite(tpl,dat){
for(var x in dat) tpl=tpl.replace(new RegExp("{"+x+"}","g"),"");
}