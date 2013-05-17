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

function formatter_default(options) {
	this.format = function (value, field) {
		var V="";
		try {
			V=value.toString();
		} catch (Error) {
			
		}
		return V;
	};
}

unc.jPivot.addFormatter('default',formatter_default);