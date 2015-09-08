using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JavaScriptDay1.Models {
    public class Person {
        public string _firstName;
        public string _lastName;
        public string FullName {
            get {
                return _firstName + " " + _lastName;
            }
        }
    }
}