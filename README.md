# jbPivot

A simple jQuery pivot table widget

## Web site

For examples and usages see: <http://www.jbPivot.org>

## Version

0.1 - First Version

## Usage

Include jquery and jqueryui:

   	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>
   	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>

Include jbPivot and the css file:

    <script src="js/jbPivot.min.js"></script>
	<link rel="stylesheet" href="css/jbPivot.css">

Insert a div where you want the table:

	<div id="myTable"></div>

Initialize the table:

	$("#myTable").jbPivot(options);

Where options has the next format.

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
         ,l_all: "All" // Translation of the word all to be displayed
         ,l_unused_fields: "Unused fields" //Translation of the word "Unused fields to be displayed"
		  };

Yo can insert more records to the table dinamicaly:

          $("#pivot1").data('jbPivot').insertRecords([
                                                      {id:1 ,gender:"male", age:"30-40",eyes:"green", v:8},
                                                      {id:2 ,gender:"male", age:"20-30",eyes:"brown", v:7},
                                                      {id:3 ,gender:"male", age:"30-40",eyes:"brown", v:3},
                                                      {id:4 ,gender:"female", age:"40-50",eyes:"brown", v:5},
                                                      {id:5 ,gender:"male", age:"30-40",eyes:"green", v:7},
                                                      {id:6 ,gender:"male", age:"30-40",eyes:"green", v:9},
                                                      {id:7 ,gender:"female", age:"40-50",eyes:"green", v:8}
                                                  ]);

In order to insert a field, You change the options, meke a reset and then reinsert the data:

          $("#pivot1").data('jbPivot').options.fields.NewField={ field: 'v', agregateType: "sum", groupType:"none" };
          $("#pivot1").data('jbPivot').reset();
          $("#pivot1").data('jbPivot').insertRecords([
                                                      {id:1 ,gender:"male", age:"30-40",eyes:"green", v:8},
                                                      {id:2 ,gender:"male", age:"20-30",eyes:"brown", v:7},
                                                      {id:3 ,gender:"male", age:"30-40",eyes:"brown", v:3},
                                                      {id:4 ,gender:"female", age:"40-50",eyes:"brown", v:5},
                                                      {id:5 ,gender:"male", age:"30-40",eyes:"green", v:7},
                                                      {id:6 ,gender:"male", age:"30-40",eyes:"green", v:9},
                                                      {id:7 ,gender:"female", age:"40-50",eyes:"green", v:8},
                                                  ]);


Goto <http://www.jbPivot.org> to see more examples.


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
