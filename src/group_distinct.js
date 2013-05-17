/*
  	Copyright 2013 Uniclau S.L. (www.uniclau.com)
 	
  	This file is part of jPivot.

    jPivot is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    jPivot is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with jPivot.  If not, see <http://www.gnu.org/licenses/>.
 */

function grp_distinct(options) {
	
	this.values=[];
	this.names={};
	this.fieldtype="number";
	this.field=options.field;
	if (typeof options.sort == "undefined") {
		this.sort="ASC";
	} else {
		this.sort=options.sort.toUpperCase();
	}
	if (typeof options.params !== "undefined") {
		this.params=options.params;
	} else {
		this.params=null;
	}
	if (typeof options.showAll !== "undefined") {
		this.showAll=options.showAll;
	} else {
		this.showAll=false;
	}
	
	this.CalculateValue = function(R) {
		var V="";
		var res;
		if (typeof R[this.field] === "function" ) {
			V=R[this.field](this.params);
		} else if (typeof R[this.field] === "number" ) {
			V=R[this.field].toString();
		} else if (typeof R[this.field] === "string" ) {
			V=R[this.field];
			this.fieldtype="string";
		}
		
		if (typeof V !== "string" ) V="";
		
		if (typeof this.names[V] !== "undefined") {
			res=this.names[V];
		} else { 
			res=this.values.push(V)-1;
			this.names[V]=res;
		}
		
		return res;
	};
	
	this.getStringValue = function(idx) {
		return this.values[idx];
	};
	
	this.DisplayValues = function(UsedValues) {
		var res;

		if (this.showAll) {
			res = [];
			for (i=0; i<this.values.length; i++) res.push(i.toString());
		} else {
			res = UsedValues.slice(0);
		}
		
		var self=this;
		
		if (this.fieldtype=="string") {
			res=res.sort(function(a,b) {
				var res=0;
				if ( self.values[a] < self.values[b] )
					res=-1;
				if ( self.values[a] > self.values[b] )
					  res=1;
				return res;
			});
		} else {
			res=res.sort(function(a,b) {
				var aa=parseFloat(self.values[a]);
				var bb=parseFloat(self.values[b]);
				var res=0;
				if ( aa<bb )
					res=-1;
				if ( aa>bb )
					  res=1;
				return res;
			});			
		}
		
		if (this.sort == "DESC") res=res.reverse();
	 
		return res;
	}
	
}

unc.jPivot.addGrouper('distinct',grp_distinct);