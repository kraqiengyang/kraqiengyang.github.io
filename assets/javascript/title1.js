// JavaScript Document

var t = 0;
function title()
{
	'use strict';
	t++;
    if (t === 1)
	{
		document.title = "Hey there!";
	}
	if (t === 2)
	{
		document.title = "Welcome to";
	}
	if (t === 3)
	{
		document.title = "my website";
	}
	if (t === 4)
	{
		document.title = "This is";
	}
	if (t === 5)
	{
		document.title = "Kraqieng Yang";
	}
	if (t === 6)
	{
		document.title = "Have fun!";
	}
	if (t === 7)
	{
		t = 0;
	}
	setTimeout("title()", 2048);
}
title();
