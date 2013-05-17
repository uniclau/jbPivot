# jPivot

A simple jQuery pivot table widget

## Web site

For examples and usages see: <http://jpivot.org>

## Version

0.1 - First Version

## Usage

Include jquery and jqueryui:

   	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>
   	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>

Include jpivot and the css file:

    <script src="js/jpivot.min.js"></script>
	<link rel="stylesheet" href="css/jpivot.css">

Insert a div where you want the table:

	<div id="myTable"></div>

Initialize the table:

	$("#mytable").jPivot(options);

Wher options has the next format.

	var options= {	fields:	{
						<field_name>: {
							field: "<field_key>"
							,label: "<field_label>"
							,sort: <"asc"|"desc">
							,showAll: <true|false*>
							,groupType: <"distinct"*|"none"|...>
							,agregateType: <"distinct"*|"count"|"average"|"sum"|...>
							,formatter: <null*|...|function(val,field) {
										  		// Calculate the formated val
		  										return formatedVal;
										   }>
						}
						,...(0..n)
			}
		  	,xfields:["<fieldname>" ,...(0..n) ]
		  	,yfields:["<fieldname>" ,...(0..n) ]
		  	,zfields:["<fieldname>" ,...(0..n) ] 
		  	,copyright:<true|efalse>
		  	,summary:<true|false>
		  	,data: [
		  		{"<field_key>":<value>
		  		 ,...(0..n)
		  		}
		  		,...(0..n)
		  	]
		  	,formatter: <"default"*|...|function(val, field) {   // Only called when the field specific formated is not defined
		  		// Calculate the formated val
		  		return formatedVal;
		  	}
		  };

Yo can insert more records to the table dinamicaly:

	$("#mytable").insertRecords([
		  		{<field_key>:<value>
		  		 ,...(0..n)
		  		}
		  		,...(0..n)
		  	]);
		  	
Goto <http://www.jpivot.org> to see more examples.


## Author

Uniclau S.L. <http://www.uniclau.com> 
<info@uniclau.com> 

## License
 
 	Copyright 2013 Uniclau S.L. (www.uniclau.com)

	This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

	There is a copy of the license in the COPYING file in this directory.
	
    You can also find it at <http://www.gnu.org/licenses/>.