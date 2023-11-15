import React from "react";

const DotNet = () => {
  document.title = "DotNet";
  return (
    <div class='Text1'>
      <h2>Notes for passing a .NET interview</h2>
      <br></br>
      <i>November 2023</i>
      <br></br>
      <br></br>
      <p>
        <b>1. Basic Concepts</b>
      </p>
      <p>
        <br></br>
        <b>C# Overview</b>
      </p>
      <br></br>
      <p>C# is a programming language:</p>
      <br></br>
      <p>
        Language Features: C# is a modern, object-oriented, and type-safe
        programming language. It offers features like automatic garbage
        collection, exception handling, generics, LINQ, async programming, and
        more.
      </p>
      <br></br>
      <p>
        Use Cases: While it's commonly used for developing Windows applications,
        it can also be used for web, mobile, and cloud applications, especially
        with the .NET ecosystem.
      </p>
      <br></br>
      <p>
        Development Environment: C# is most commonly used with integrated
        development environments (IDEs) like Visual Studio, which provide
        extensive tools for development, debugging, and testing.
      </p>
      <br></br>
      <p>
        <u>
          <b>Value types</b>
        </u>
      </p>
      <br></br>
      <p>
        - Both value types and reference types are passed by value by default.
        However, the value of a reference type variable is the 'pointer' to a
        memory address on the heap.
      </p>
      <br></br>
      <p>
        - Value types are typically stored on the stack rather than the heap.
        This means they are allocated and deallocated faster than reference
        types, which are stored on the heap.
      </p>
      <br></br>
      <p>
        - Value types do not have a null value, because they always have a
        default value. For example, the default value of int is 0.
      </p>
      <br></br>
      <p>
        - Value types can be converted to reference types using box operator,
        which creates a new object on the heap that contains a copy of the
        value. This is useful when a value type needs to be stored in a
        collection of reference types or when it needs to be passed as an
        argument to a method that expects a reference type.
      </p>
      <br></br>
      <p>
        - Include simple types, such as int, float and bool as well as
        enumerations and structures.
      </p>
      <br></br>
      <p>
        <u>
          <b>Reference types</b>
        </u>
      </p>
      <br></br>
      <p>
        - Reference types are stored on the heap, rather than the stack. This
        means they are allocated and deallocated by the garbage collector, which
        monitors the heap and reclaims memory that is no longer being used by
        the application.
      </p>
      <br></br>
      <p>
        - Reference types can have a null value, which means that they do not
        refer to any object. This is different from value types, which always
        have a default value.
      </p>
      <br></br>
      <p>
        - Both value types and reference types are passed by value by default.
        However, the value of a reference type variable is the 'pointer' to a
        memory address on the heap.
      </p>
      <br></br>
      <p>
        - Reference types in .NET include class types, such as String and Array
        as well as interface types and delegate types.
      </p>
      <br></br>
      <p>
        <u>
          <b>Value parameters</b>
        </u>
      </p>
      <br></br>
      <p>
        - The most common type of parameter in .NET. They are used to pass a
        copy of the argument value to the method or function
      </p>
      <br></br>
      <p>
        - Any changes made to the parameter inside the method or function does
        not affect the original argument
      </p>
      <br></br>
      <p>
        - Value parameters are passed by value, which means that the argument is
        copied into the parameter
      </p>
      <br></br>
      <p>
        <u>
          <b>Reference parameters</b>
        </u>
      </p>
      <br></br>
      <p>
        - They are passed by value which is a reference to an address on the
        heap
      </p>
      <br></br>
      <p>
        - The method or function receives a reference to the orginal argument,
        rather than a copy of its value
      </p>
      <br></br>
      <p>
        - Any changes made to the parameter inside the method or function are
        reflected in the original argument
      </p>
      <br></br>
      <p>
        <u>
          <b>Mutable types</b>
        </u>
      </p>
      <br></br>
      <p>
        - A mutable type is a type whose state can be modified after it is
        created. An immutable type, on the other hand, is a type whose state
        cannot be change after it is created.
      </p>
      <br></br>
      <p>
        - Some examples of mutable types in .NET include classes like
        System.StringBuilder and System.Data.Dataset, which allows you to modify
        their contents after they are created. For example, you can use the
        Append() method of System.StringBuilder to add more characters to a
        string, or you can use the Add() method of System.Data.DataSet to add
        new rows to a dataset.
      </p>
      <br></br>
      <p>
        <u>
          <b>Immutable types</b>
        </u>
      </p>
      <br></br>
      <p>
        - System.String is an immutable type, because once you create a string,
        you cannot change its contents. If you want to modify a string, you must
        create a new string with desired modifications
      </p>
      <br></br>
      <p>
        - If you create a reference to a string, and then modify the original
        string, the reference will continue to point to the original object
        instead of the new object that was created when the string was
        modified.The following code illustrates this behaviour:
      </p>
      <br></br>
      <p>
        <i>string str1 = 'Hello ';</i>
      </p>
      <br></br>
      <p>
        <i>string str2 = str1;</i>
      </p>
      <br></br>
      <p>
        <i>str1 += 'World';</i>
      </p>
      <br></br>
      <p>
        <i>System.Console.WriteLine(str2);</i>
      </p>
      <p>
        <i>{/* Output: Hello */}</i>
      </p>
      <br></br>
      <p>
        In general it is considered good practice to use immutable types
        whenever possible, because they can prevent bugs and make your code
        easier to reason about
      </p>
      <br></br>
      <p>
        <u>
          <b>Mutability example - Dictionaries</b>
        </u>
      </p>
      <br></br>
      <p>
        - Dictionaries are mutable which means their state can be modified after
        they are created. This means you can add, or modify the elements of a
        dictionary after it is created.
      </p>
      <br></br>
      <p>
        - For example, you can use the Add() method of the
        System.Collections.Generic.Dictionary&lt;TKey, TValue&gt; class to add
        new key-value pairs to a dictionary, or you can use the Remove() method
        to remove elements from a dictionary
      </p>
      <br></br>
      <p>
        - While mutable dictionaries can be useful in some cases, it is
        generally considered good pratice to use immutable data structures
        wherever possible.
      </p>
      <br></br>
      <p>
        - In .NET, you can use the System.Immutable.ImmutableDictionary&lt;TKey,
        TValue&gt; class to create an immutable dictionary.
      </p>
      <br></br>
      <p>
        <u>
          <b>Float vs Double</b>
        </u>
      </p>
      <br></br>
      <p>
        - Float and double data types are both used to represent floating-point
        numbers
      </p>
      <br></br>
      <p>
        - A float is a single-precision 32-bit floating-point number. A double
        is a double-precision 64-bit floating point number
      </p>
      <br></br>
      <p>
        - Double has 2x the precision of float. In general a double has 15
        decimals of precision, while a float has 7.
      </p>
      <br></br>
      <p>
        - The maximum value of a float is about 3e38, but double is about
        1.7e308, so using a float can hit 'infinity' (ie. a spcial floating
        point number) much more easiliy than double for something simple like
        computing the factorial of 60
      </p>
      <br></br>
      <p>
        <u>
          <b>Out keyword</b>
        </u>
      </p>
      <br></br>
      <p>
        To use an out parameter, both the method definition and the calling
        method must explicitly use the out keyword. For example:
      </p>
      <br></br>
      <i>
        <p>int initializeInMethod;</p>
        <p>OutArgExample(out initializeInMethod);</p>
        <p>Console.WriteLine(initializeInMethod); // value is now 44</p>
        <br></br>
        <p>void OutArgExample(out int number)</p>
        <br></br>
        <p> number = 44;</p>
      </i>
      <br></br>
      <p>
        Variables passed as out arguments don't have to be initialized before
        being passed in a method call. However, the called method is required to
        assign a value before the method returns.
      </p>
      <br></br>
      <p>
        Deconstruct methods declare their parameters with the out modifier to
        return multiple values. Other methods can return value tuples for
        multiple return values.
      </p>
      <br></br>
      <p>
        You can declare a variable in a separate statement before you pass it as
        an out argument. You can also declare the out variable in the argument
        list of the method call, rather than in a separate variable declaration.
        out variable declarations produce more compact, readable code, and also
        prevent you from inadvertently assigning a value to the variable before
        the method call. The following example defines the number variable in
        the call to the Int32.TryParse method.
      </p>
      <br></br>
      <i>
        <p>string numberAsString = '1640';</p>
        <br></br>
        <p>if (Int32.TryParse(numberAsString, out int number))</p>
        <i>{"{"}</i>
        <p>
          {"Console.WriteLine($'Converted {numberAsString}' to {number}');"}
        </p>
        <i>{"}"}</i>
        <br></br>
        <br></br>
        <p>else</p>
        <i>{"{"}</i>
        <p>{"Console.WriteLine($'Unable to convert '{numberAsString}'');"}</p>
        <p>// The example displays the following output:</p>
        <p>// Converted '1640' to 1640</p>
        <i>{"}"}</i>
      </i>
      <br></br>
      <br></br>
      <p>You can also declare an implicitly typed local variable.</p>
      <br></br>
      <p>
        <u>
          <b>Exception handling</b>
        </u>
      </p>
      <br></br>
      <p>
        - exception class is the base class for all exceptions in the .NET
        framework. It is defined in the 'System' namespace and provides common
        functionality for handling exceptions
      </p>
      <br></br>
      <p>
        - The exception class provides several properties that can be used to
        obtain information about an exception, such as the message, the stack
        trace, and the inner exception. It also provides a 'ToString' methods
        that can be used to generate a string representation of the exception,
        including the message and stack trace.
      </p>
      <br></br>
      <p>
        - The exception class is not typically used directly, but it is the base
        class for many other exception classes in the .NET framework. For
        example, the 'ArgumentException' class is derived from 'Exception' and
        is used to represent an error in the arguments passed to a method
      </p>
      <br></br>
      <p>
        - 'FileNotFoundException' class is also derived from 'Exception' and is
        used to represent an error when a file cannot be found
      </p>
      <br></br>
      <p>
        - Finally block is where you write code that should execute whether or
        not you have an exception
      </p>
      <br></br>
      <p>
        <b>Casting</b>
      </p>
      <br></br>
      <p>
        - Involves moving from one datatype to another. Like integer to double
      </p>
      <br></br>
      <p>
        <b>Implicit casting</b>
      </p>
      <br></br>
      <p>
        <i>Int i = 10;</i>
      </p>
      <br></br>
      <p>
        <i>Double d = i; // implicit casting</i>
      </p>
      <br></br>
      <p>
        When moving from a lower data type to a higher data type, you will
        normally have implicit casting
      </p>
      <br></br>
      <p>
        <b>Explicit Casting</b>
      </p>
      <br></br>
      <p>
        <i>Double d1 = 100.23</i>
      </p>
      <br></br>
      <p>
        <i>Int y = (int)d1;</i>
      </p>
      <br></br>
      <p>
        When moving from a higher data type to a lower data type, you will need
        explicit casting
      </p>
      <br></br>
      <p>
        Consequences of explicit casting can be data type. In above example,
        since int doesn't support decimals, you will have data loss
      </p>
      <br></br>
      <p>
        <b>2. Object-Oriented Programming</b>
      </p>
      <br></br>
      <p>
        <u>
          <b>Key points</b>
        </u>
      </p>
      <br></br>
      <p>
        - User defined data types that represent state and behaviour of an
        object
      </p>
      <br></br>
      <p>
        - Classes are reference types that hold the object created dynamically
        on the heap. Programmer specifies the accessibility of a class, method,
        or property
      </p>
      <br></br>
      <p>
        - The ultimate base type of all classes is object Every type inherits
        from Object. Classes, structs, enums (which are just structs), and
        delegates (which are just classes).
      </p>
      <br></br>
      <p>- Default access modifier is Internal</p>
      <p>- Default access modifiers of methods variables is private</p>
      <p>
        <br></br>
        <u>
          <b>Type of Classes</b>
        </u>
      </p>
      <br></br>
      <p>
        <b>Abstract</b>
      </p>
      <br></br>
      <p>- Cannot be instantiated. Must be inherited</p>
      <p>
        - Contains both abstract and non-abstract methods. Abstract methods
        don't have implementation and are overridden
      </p>
      <br></br>
      <p>
        - A class in C# can only inherit from one abstract class (You can only
        inherit from a single class in .Net. It is however possible to implement
        multiple interfaces)
      </p>
      <br></br>
      <p>
        - A non-abstract class derived from an abstract class must include
        actual implementations of all inherited abstract methods and accessors.
      </p>
      <br></br>
      <p>
        <b>Partial</b>
      </p>
      <br></br>
      <p>
        - Allows dividing a class's properties, methods and events into a
        multiple source files and at compile time their files are compiled into
        a single class
      </p>
      <br></br>
      <p>
        - If you seal a specific part of a partial class then the entire class
        is sealed
      </p>
      <br></br>
      <p>
        - If a partial class inherits from a base class, it must be declared in
        only one part of the partial class.
      </p>
      <br></br>
      <p>
        - All parts of the partial class will inherit from the base class, as
        they are considered as a single class during compilation.
      </p>
      <br></br>
      <p>
        - Similarly, if a partial class is meant to be a base class, all of its
        parts collectively represent the base class.
      </p>
      <br></br>
      <p>
        <b>Static</b>
      </p>
      <br></br>
      <p>
        - Cannot be instantiated such that class members can be called directly
        using their class name
      </p>
      <br></br>
      <p>- Inside a static class, only static members are allowed</p>
      <p>- Static class cannot be inherited</p>
      <br></br>
      <p>
        <b>Sealed</b>
      </p>
      <br></br>
      <p>
        - Cannot be inherited by other classes. They are used to prevent other
        classes from extending or modifying behaviour.
      </p>
      <br></br>
      <p>
        <u>
          <b>Access modifiers</b>
        </u>
      </p>
      <br></br>
      <p>
        <b>Public</b>
      </p>
      <br></br>
      <p>
        - The members that are declared with the 'public' access modifer can be
        accessed from anywhere in the program
      </p>
      <br></br>
      <p>
        <b>Private</b>
      </p>
      <br></br>
      <p>
        - The members that are declared with the 'private' access modifier can
        only be accessed within the same class
      </p>
      <br></br>
      <p>
        <b>Protected</b>
      </p>
      <br></br>
      <p>
        - The members that are declared with the 'protected' access modifier can
        be accessed within the same class and by derived classes
      </p>
      <br></br>
      <p>
        <b>Internal</b>
      </p>
      <br></br>
      <p>
        - The members that are declared with the internal access modifier can be
        accessed within the assembly it is declared but not in other assemblies
      </p>
      <br></br>
      <p>
        <u>
          <b>Virtual methods</b>
        </u>
      </p>
      <br></br>
      <p>
        - A virtual method is a class method that offers functionality to the
        programmer to override a method in the derived class (first created in
        base class) that has the same signature
      </p>
      <br></br>
      <p>
        - Virtual methods are mainly used to perform polymorphism in the OOP
        environment
      </p>
      <br></br>
      <p>
        - A virtual method can be created in the base class by using the
        'virtual' keyword and the same method can be overridden in the derived
        class by using the 'override keyword'
      </p>
      <br></br>
      <p>- It's optional to override a virtual method in the derived class</p>
      <br></br>
      <b>
        <u>Abstract class vs interface</u>
      </b>
      <p>
        <br></br>
        <b>When should I use an abstract class?</b>
      </p>
      <br></br>
      <p>
        Good choice if you are bringing into account the inheritance concept
        because it provides common base class implementation to the derived
        classes
      </p>
      <br></br>
      <p>
        - Also good if you want to declare non-public members. In an interface,
        all methods must be public
      </p>
      <br></br>
      <p>
        - If you want to declare new methods in the future, then it is great to
        go with an abstract class. If you add new methods to the interface, then
        all of the classes that are already implemented in the interface will
        have to be changed in order to implement these new methods
      </p>
      <br></br>
      <p>
        - If you want to create multiple versions of your component, then go
        with abstract class. They provide a simple and easy way to version your
        components. When you update the base class, all of the inheriting
        classes would be automatically updated with the change. Interfaces, on
        the other hand can't be changed once these are created. If you want a
        new version of your interface, then you must create a new interface.
      </p>
      <br></br>
      <p>
        <b>When should I use an interface?</b>
      </p>
      <br></br>
      <p>
        - If you are creating functionality that will be useful across a wide
        range of objects, then use an interface. Abstract classes should be used
        for objects that are closely related. But the interfaces are best suited
        for providing common functionality to unrelated causes.
      </p>
      <br></br>
      <p>
        - Interfaces are good choice if you think API won't be changing for a
        while
      </p>
      <br></br>
      <p>
        - If we are going to design small, concise bits of functionality, then
        you must use interfaces. But if you are designing large functional
        units, then you should use an abstract class
      </p>
      <br></br>
      <p>
        <u>
          <b>Structs</b>
        </u>
      </p>
      <br></br>
      <p>
        Value types that are typically used for small, simple objects that have
        a short lifespan and represent a single value or a closely related set
        of data. Understanding when to use structs instead of classes, which are
        reference types, is crucial for writing efficient and effective C# code.
        Here are some guidelines for when you might choose to use structs:
      </p>
      <br></br>
      <p>
        <b>Small and Lightweight Objects:</b>
      </p>
      <br></br>
      <p>
        Structs are best suited for small data structures. The .NET guidelines
        suggest using structs for objects that are smaller than 16 bytes. Larger
        structs can lead to performance issues due to the cost of copying them.
      </p>
      <br></br>
      <p>
        <b>Immutable Data</b>:
      </p>
      <br></br>
      <p>
        Structs are a good choice when creating immutable types. Once a struct
        is created, its data should not be changed. This immutability can help
        prevent bugs and makes the code easier to understand.
      </p>
      <br></br>
      <p>
        <b>Value Semantics:</b>
      </p>
      <br></br>
      <p>
        Use structs when you need value semantics, where each instance is
        independent and modifications to one instance do not affect others. This
        is in contrast to reference types, where different variables can
        reference the same object.
      </p>
      <br></br>
      <p>
        <b>3. Advanced C# Features</b>
      </p>
      <br></br>
      <p>
        <u>
          <b>Delegates</b>
        </u>
      </p>
      <br></br>
      <p>
        - A delegate is a type that holds a reference to a method. Declared with
        a signature that shows the return type and parameters for the methods it
        references, it can hold references only to methods that match its
        signature
      </p>
      <br></br>
      <p>
        <i>
          // Define a delegate type for a method that takes an integer and
          returns a string
        </i>
      </p>
      <br></br>
      <p>
        <i>public delegate string IntToString(int i);</i>
      </p>
      <br></br>
      <p>
        <i>// Define two methods that match the delegate signature</i>
      </p>
      <br></br>
      <p>
        <i>public static string IntToBinaryString(int i)</i>
      </p>
      <br></br>
      <p>
        <i>{"{"}</i>
      </p>
      <br></br>
      <p>
        <i> return Convert.ToString(i, 2);</i>
      </p>
      <br></br>
      <p>
        <i>{"}"}</i>
      </p>
      <br></br>
      <p>
        <i>public static string IntToHexString(int i)</i>
      </p>
      <br></br>
      <p>
        <i>{"{"}</i>
      </p>
      <br></br>
      <p>
        <i> return Convert.ToString(i, 16);</i>
      </p>
      <br></br>
      <p>
        <i>{"}"}</i>
      </p>
      <br></br>
      <p>
        <i>// Define a method that takes a delegate as an argument</i>
      </p>
      <br></br>
      <p>
        <i>public static void PrintIntAsString(IntToString convert, int i)</i>
      </p>
      <br></br>
      <p>
        <i>{"{"}</i>
      </p>
      <br></br>
      <p>
        <i> Console.WriteLine(convert(i));</i>
      </p>
      <br></br>
      <p>
        <i>{"}"}</i>
      </p>
      <br></br>
      <p>
        <i>
          // Use the PrintIntAsString method with the two methods defined above
        </i>
      </p>
      <p>
        <i>public static void Main()</i>
      </p>
      <br></br>
      <p>
        <i>{"{"}</i>
      </p>
      <br></br>
      <p>
        <i> PrintIntAsString(IntToBinaryString, 10);</i>
        <p></p>
      </p>
      <br></br>
      <p>
        <i> PrintIntAsString(IntToHexString, 10);</i>
      </p>
      <i>{"}"}</i>
      <br></br>
      <br></br>
      <p>
        - In the context of events, a delegate is used to specify the signature
        of the event handling method.
      </p>
      <br></br>
      <p>
        <u>
          <b>Events</b>
        </u>
      </p>
      <br></br>
      <p>
        - To respond to an event, you define an event handler method in the
        event receiver.
      </p>
      <br></br>
      <p>
        - This method must match the signature type of the delegate for the
        event your're handling
      </p>
      <br></br>
      <p>
        - In the event handler, you perform the actions that are required when
        the event is raised, such as collecting user input after the user clicks
        a button
      </p>
      <br></br>
      <p>
        - To receive notifcations when the event occurs your event handler
        method must subscribe to the event
      </p>
      <br></br>
      <p>
        - The following example shows an event handler method named
        c_ThresholdReached that matches the signature for the EventHandler
        delegate. The method subscribes to the ThresholdReached event:
      </p>
      <br></br>
      <i>
        <p>class ProgramTwo</p>
        <p>{"{"}</p>
        <br></br>
        <p> static void Main()</p>
        <p>{"{"}</p>
        <p> var c = new Counter();</p>
        <p> c.ThresholdReached += c_ThresholdReached;</p>
        <br></br>
        <p>// provide remaining implementation for the class</p>
        <p> {"}"}</p>
        <br></br>
        <p> static void c_ThresholdReached(object sender, EventArgs e)</p>
        <p>{"{"}</p>
        <p> Console.WriteLine('The threshold was reached.');</p>
        <p>{"}"}</p>
        <p>{"}"}</p>
        <br></br>
      </i>
      <p>
        <u>
          <b>Boxing</b>
        </u>
      </p>
      <br></br>
      <p>
        - Refers to the process of converting a value type (such as an integer
        or a boolean value) into a reference type
      </p>
      <br></br>
      <p>
        - This is done by creating a new object that contains the value of the
        original type, and storing a reference to this new object.
      </p>
      <br></br>
      <p>// Declare an integer value</p>
      <p>
        <i>int i = 5;</i>
      </p>
      <br></br>
      <p>// Box the integer value</p>
      <p>
        <i>object o = i;</i>
      </p>
      <br></br>
      <p>
        - In this example, the integer value 5 is boxed and stored in the object
        reference type o.
      </p>
      <br></br>
      <p>
        - This allows us to treat the value of i as an object, even though it is
        originally a value type.
      </p>
      <br></br>
      <p>
        - Boxing / unboxing affects performance because of jumping from stack to
        heap etc
      </p>
      <br></br>
      <p>
        <u>
          <b>Unboxing</b>
        </u>
      </p>
      <br></br>
      <p>
        - Unboxing refers to the process of converting a reference type (an
        object) into a value type
      </p>
      <br></br>
      <p>
        - It allows you to access the value stored in an object and treat it
        like a normal value of the corresponding value type.
      </p>
      <br></br>
      <p>
        <i>object myObject = 5;</i>
      </p>
      <p>
        <i>int myInt = (int)myObject; // unboxing</i>
      </p>
      <br></br>
      <p>
        - In this example, myObject is a reference type that contains the value
        5.
      </p>
      <br></br>
      <p>
        - When we use (int) syntax to cast myObject to an int we are performing
        unboxing and acessing the value stored in myObject. The value is then
        stored in myInt which is a value type
      </p>
      <br></br>
      <p>
        <u>
          <b>Boxing and unboxing used by non-generic collections</b>
        </u>
      </p>
      <br></br>
      <p>
        - Boxing and unboxing are concepts used with non-generic collections,
        which are collections that can store objects of any data type
      </p>
      <br></br>
      <p>
        - When you add a value to a non-generic collection, the value type is
        automatically boxed. This means that the value is converted to a
        reference type and stored in the collection as an object
      </p>
      <br></br>
      <p>
        - When you retrieve a value from the collection, it must be unboxed,
        which means that the reference type is converted back to a value type
      </p>
      <br></br>
      <p>
        <i>// Create a non-generic collection of ints</i>
      </p>
      <br></br>
      <p>
        <i>ArrayList collection = new ArrayList();</i>
      </p>
      <br></br>
      <p>
        <i>// Add a value to the collection*</i>
      </p>
      <br></br>
      <p>
        <i>int value = 42;</i>
      </p>
      <br></br>
      <p>
        <i>collection.Add(value);</i>
      </p>
      <br></br>
      <p>
        <i>// Retrieve the value from the collection</i>
      </p>
      <br></br>
      <p>
        <i>int unboxedValue = (int)collection[0];</i>
      </p>
      <br></br>
      <p>
        - In this example, the int value is added to the ArrayList collection,
        which boxes the value and stores it as an object. When the value is
        retrieved from the collection, it is unboxed and converted back to an
        int.
      </p>
      <br></br>
      <p>
        - Boxing and unboxing are useful in certain situations - they can also
        have a negative impact on performance.
      </p>
      <br></br>
      <p>
        - Therefore, it's generally recommended to use generic collections
        whenever possible, as they can avoid the overhead of boxing and unboxing
      </p>
      <br></br>
      <p>
        <b>4. Data Structures and Collections</b>
      </p>
      <br></br>
      <p>
        <u>
          <b>Collections</b>
        </u>
      </p>
      <br></br>
      <p>- System.Collections namespace</p>
      <br></br>
      <p>
        - You often want to create and manage a group of related objects. There
        are two ways to group objects: by creating arrays of objects and by
        creating collections of objects.
      </p>
      <br></br>
      <p>
        - Arrays are most useful for creating and working with a fixed number of
        strongly typed objects
      </p>
      <br></br>
      <p>
        - Collections provide a more flexible way to work with groups of
        objects. Unlike arrays, the group of{" "}
      </p>
      <br></br>
      <p>
        objects you work with can grow and shrink dynamically as the needs of
        the application change
      </p>
      <br></br>
      <p>
        - For some collections, you can assign a key to any object that you put
        in the collection so that you can quickly retrieve the object by using
        the key
      </p>
      <br></br>
      <p>
        - Common collection classes are: List&lt;T&gt;, Dictionary&lt;TKey,
        TValue&gt; etc
      </p>
      <br></br>
      <p>
        - There is almost 0 reason to use non generic collections. Genetics were
        introduced in .net 2.0 there is very little code that exists now that
        can't take advantage of generic collections
      </p>
      <br></br>
      <p>
        <u>
          <b>Generics</b>
        </u>
      </p>
      <br></br>
      <p>
        - System.Collections.Generic contains classes and interfaces that define
        generic collections, which allows users to create strongly typed
        collections that provide a better type safety and performance than
        non-generic strong typed collections
      </p>
      <br></br>
      <p>
        - Examples of System.Collections.Generic classes include: List&lt;T&gt;,
        Dictionary&lt;TKey, TValue&gt;
      </p>
      <br></br>
      <p>
        - Generics introduces the concept of type parameters to .NET, which
        makes it possible to design classes and methods that defer specification
        of one of more types until the class or method is declared and
        instantiated by client code
      </p>
      <br></br>
      <p>
        - For example, by using a generic type of paramater T, you can write a
        single class that other client code can use without incurring the cost
        of runtime casts or boxing operations
      </p>
      <br></br>
      <p>
        <u>
          <b>Array</b>
        </u>
      </p>
      <br></br>
      <p>- Part of System.Object namespace</p>
      <br></br>
      <p>
        - Can store multiple variables of the same type in an array data
        structure
      </p>
      <br></br>
      <p>
        - If you want to store elements of any type, you can specify object as
        its type
      </p>
      <br></br>
      <p>
        - In the unified type system of C#, all types, predefined and
        user-defined inherit directly from Object
      </p>
      <br></br>
      <p>
        - When you initialize a C# array, the .NET runtime reserves a block of
        memory sufficient to hold the elements. It then stores the elements of
        the array sequentially within that block of memory meaning they are very
        efficient
      </p>
      <br></br>
      <p>
        - They are implemented in runtime which is why they get special syntax
        that no other type has
      </p>
      <br></br>
      <p>
        <u>
          <b>List</b>
        </u>
      </p>
      <br></br>
      <p>
        - The List&lt;T&gt; class is a sequentialy and dynamically resizable
        list of items. Under the hood, List&lt;T&gt; is based on an array
      </p>
      <br></br>
      <p>- The List&lt;T&gt; class has three main fields:</p>
      <br></br>
      <p>
        1. T[] _items is an internal array. The list is built on the base of
        this array
      </p>
      <br></br>
      <p>
        2. Int_size stores information about the number of items in the list
      </p>
      <br></br>
      <p>3. Int_version stores the version of the collection</p>
      <br></br>
      <p>
        <u>
          <b>Dictionary</b>
        </u>
      </p>
      <br></br>
      <p>
        - Under the hood, a dictionary in .NET is implemented using a hash
        table. A hash table is a data structure that stores key-value pairs and
        provides fast lookups, inserts, and deletes of the values based on their
        keys.
      </p>
      <br></br>
      <p>
        - In a dictionary, the keys are used to compute a hash code, which is an
        integer value that represents the key. The hash code is then used to
        determine the index in the hash table where the value will be stored.
        This process is called hashing.
      </p>
      <br></br>
      <p>
        - When you look up a value in a dictionary, the key is hashed to compute
        its hash code, and then the value is looked up in the hash table at the
        index determined by the hash code. This allows the dictionary to quickly
        find the value associated with a given key.
      </p>
      <br></br>
      <p>
        - Inserting and deleting key-value pairs from a dictionary also involves
        computing the hash code of the key and using it to determine the index
        in the hash table where the value should be stored or removed.
      </p>
      <br></br>
      <p>
        - One of the benefits of using a hash table to implement a dictionary is
        that it provides fast lookups, inserts, and deletes of key-value pairs,
        with an average-case time complexity of O(1). This means that, on
        average, it takes a constant amount of time to perform these operations,
        regardless of the size of the dictionary.
      </p>
      <br></br>
      <p>
        <u>
          <b>Concurrent Dictionary</b>
        </u>
      </p>
      <br></br>
      <p>
        - Represents a thread-safe collection of key-value pairs that can be
        accessed by multiple threads concurrently
      </p>
      <br></br>
      <p>
        - Without concurrentDictionary class, if we have to use Dictionary class
        with multiple threads, then we have to use locks to provide
        thread-safety which is often error-prone
      </p>
      <br></br>
      <p>
        <u>
          <b>Performance</b>
        </u>
      </p>
      <br></br>
      <p>
        - To look up a key in a hash table: <b>O(1)</b>
      </p>
      <br></br>
      <p>
        - To look up key in a list using linear search: <b>O(N)</b>
      </p>
      <br></br>
      <p>
        - To look up key in an array using linear search: <b>O(N)</b> - array is
        faster than list since elements are stored continuously in memory
      </p>
      <br></br>
      <p>
        - When comparing the performance of searching through an array vs list,
        it is important to remember two types of memory:
      </p>
      <br></br>
      <p>
        - <b>Static memory: </b>The type of memory that is defined at compile
        time. This memory is reserved for a variable and cannot be changed at
        runtime
      </p>
      <br></br>
      <p>
        - <b>Dynamic memory: </b>The type of memory used at runtime. This memory
        space is also reserved for a variable, but in this case it can be
        modified at runtime
      </p>
      <br></br>
      <p>- List uses dynamic memory while array uses static memory</p>
      <br></br>
      <p>
        <u>
          <b>IEnumerable Interface</b>
        </u>
      </p>
      <br></br>
      <p>
        - Represents a collection of objects that can be enumerated, or accessed
        one at a time. It is a generic interface, which means that it can be
        used with any data type
      </p>
      <br></br>
      <p>
        - IEnumerable is typically used when working with collections of
        objects, such as lists or arrays
      </p>
      <br></br>
      <p>
        - Allows you to write code that can iterate over the elements in the
        collection, without having to know the specific type of objects that the
        collection contains
      </p>
      <br></br>
      <p>
        - In the below example, the collection must implement the IEnumerable
        interface in order to use the foreach loop:
      </p>
      <br></br>
      <p>
        <i>
          List&lt;string&gt; names = new List&lt;string&gt;(){" "}
          {("John", "Jane", "Bob")};
        </i>
      </p>
      <br></br>
      <p>
        <i>foreach (string name in names)</i>
      </p>
      <br></br>
      <p>
        <i>{"{"}</i>
      </p>
      <br></br>
      <p>
        <i> Console.WriteLine(name);</i>
      </p>
      <br></br>
      <p>
        <i>{"}"}</i>
      </p>
      <br></br>
      <p>
        - In this example, the names list implements the IEnumerable interface,
        so it can be used with foreach
      </p>
      <br></br>
      <p>
        <u>
          <b>IEnumerator Interface</b>
        </u>
      </p>
      <br></br>
      <p>
        - Typically used in conjunction with the IEnumerable interface, which
        represents a collection of objects that can be enumerated
      </p>
      <br></br>
      <p>
        - The IEnumerator interface defines a single method called MoveNext,
        which is used to move to the next element in the collection. Also
        defines two properties, Current and Reset, which are used to access the
        current element in the collection and reset the enumerator to the
        beginning of the collection, respectively.
      </p>
      <br></br>
      <p>
        - Example of using the IEnumerator interface to iterate over a
        collection fo strings:
      </p>
      <br></br>
      <i>
        <p>
          List&lt;string&gt; names = new List&lt;string&gt;(){" "}
          {("John", "Jane", "Bob")};
        </p>
        <br></br>
        <p>IEnumerator&lt;string&gt; enumerator = names.GetEnumerator();</p>
        <br></br>
        <p>while (enumerator.MoveNext())</p>
        <i>{"{"}</i>
        <p> Console.WriteLine(enumerator.Current);</p>
        <i>{"}"}</i>
      </i>
      <br></br>
      <p>
        <br></br>- Above, the names list implements the IEnumerable interface,
        so it can be used with the GetEnumerator method to obtain a IEnumerator
        object
      </p>
      <br></br>
      <p>
        - The IEnumerator object is then used in a while loop to iterate over
        the elements in the names list. The MoveNext() method is used to move to
        the next element in the collection, and the Current property is used to
        access the current element
      </p>
      <br></br>
      <p>
        - IEnumerator is an important concept in .NET programming because it
        allows you to write code that can iterate over a collection of objects
        in a generic and reusable way
      </p>
      <br></br>
      <p>
        <u>
          <b>Array vs ArrayList</b>
        </u>
      </p>
      <br></br>
      <p>
        <b>
          - Arraylists are obsolete and should never be used in anything close
          to modern c# however here is comparison:
        </b>
      </p>
      <br></br>
      <p>
        - Array is fixed length. You can use resize to change length but it
        isn't very straight-forward
      </p>
      <br></br>
      <p>- Array is strongly-typed</p>
      <br></br>
      <p>
        - ArrayList is flexible in terms of number of elements. It is not
        strongly-typed
      </p>
      <br></br>
      <p>
        - Performance of array is better since there is no boxing / unboxing as
        it is strongly-typed
      </p>
      <br></br>
      <p>
        - When adding a value, boxing will take place - value type to reference
        type
      </p>
      <br></br>
      <p>- When retrieving a value, unboxing will take place</p>
      <p>
        <br></br>
        <b>5. Memory Management</b>
      </p>
      <br></br>
      <p>
        <u>
          <b>Key points</b>
        </u>
      </p>
      <br></br>
      <p>
        - Garbage collection is a CLR process that keeps running continuously,
        automatically freeing up memory that is no longer used by the program
      </p>
      <br></br>
      <p>
        - The garbage collector is a background process that runs on a separate
        thread from the main program
      </p>
      <br></br>
      <p>
        - Managed resources are those that are pure .NET code and managed by the
        runtime and are under its direct control. Garbage collectors cannot
        collect objects created outside the CLR runtime.
      </p>
      <br></br>
      <p>
        - Unmanaged resources are those that are not. File handles, pinned
        memory, COM objects, database connections etc.
      </p>
      <br></br>
      <p>
        <u>
          <b>Dispose Method</b>
        </u>
      </p>
      <br></br>
      <p>
        - When an object that implements the 'IDisposable' interface is no
        longer needed, the Dispose() method can be called to explicitly release
        unmanaged resources
      </p>
      <br></br>
      <p>
        - The Dispose() method calls the Dispose() method of any unmanaged
        objects that the object is using, to release their resources as well
      </p>
      <br></br>
      <p>
        - The Dispose() method then frees up any unmanaged resources that the
        object is using, such as file handles, terminating connections, or
        freeing up memory allocated outside of the managed heap
      </p>
      <br></br>
      <p>
        - Calling the Dispose() method ensures that the unmanaged resources used
        by the object are properly released, to avoid memory leaks and other
        issues
      </p>
      <br></br>
      <p>
        <u>
          <b>Finalizers</b>
        </u>
      </p>
      <br></br>
      <p>
        Finalizers (historically referred to as destructors) are used to perform
        any necessary final clean-up when a class instance is being collected by
        the garbage collector. In most cases, you can avoid writing a finalizer
        by using the System.Runtime.InteropServices.SafeHandle or derived
        classes to wrap any unmanaged handle.
      </p>
      <br></br>
      <p>
        - Finalizers cannot be defined in structs. They are only used with
        classes.
      </p>
      <br></br>
      <p>- A class can only have one finalizer.</p>
      <p>- Finalizers cannot be inherited or overloaded.</p>
      <p>- Finalizers cannot be called. They are invoked automatically.</p>
      <p>- A finalizer does not take modifiers or have parameters.</p>
      <br></br>
      <p>
        For example, the following is a declaration of a finalizer for the Car
        class.
      </p>
      <p>
        The finalizer implicitly calls Finalize on the base class of the object.
        Therefore, a call to a finalizer is implicitly translated to the
        following code:
      </p>
      <br></br>
      <p>class Car</p>
      <br></br>
      <p> ~Car() // finalizer</p>
      <i>{"{"}</i>
      <p> </p>
      <p>// cleanup statements...</p>
      <p> </p>
      <i>{"}"}</i>
      <br></br>
      <br></br>
      <p>protected override void Finalize()</p>
      <i>{"{"}</i>
      <br></br>
      <p> try</p>
      <i>{"{"}</i>
      <p> </p>
      <br></br>
      <p>// Cleanup statements...</p>
      <i>{"}"}</i>
      <br></br>
      <p> finally</p>
      <p> </p>
      <i>{"{"}</i>
      <p> base.Finalize();</p>
      <p> </p>
      <i>{"}"}</i>
      <i>{"}"}</i>
      <br></br>
      <br></br>
      <p>
        This design means that the Finalize method is called recursively for all
        instances in the inheritance chain, from the most-derived to the
        least-derived.
      </p>
      <br></br>
      <p>
        The programmer has no control over when the finalizer is called; the
        garbage collector decides when to call it. The garbage collector checks
        for objects that are no longer being used by the application. If it
        considers an object eligible for finalization, it calls the finalizer
        (if any) and reclaims the memory used to store the object.
      </p>
      <br></br>
      <p>
        <b>Using finalizers to release resources</b>
      </p>
      <br></br>
      <p>
        In general, C# does not require as much memory management on the part of
        the developer as languages that don't target a runtime with garbage
        collection. This is because the .NET garbage collector implicitly
        manages the allocation and release of memory for your objects. However,
        when your application encapsulates unmanaged resources, such as windows,
        files, and network connections, you should use finalizers to free those
        resources. When the object is eligible for finalization, the garbage
        collector runs the Finalize method of the object.
      </p>
      <br></br>
      <p>
        <u>
          <b>Using keyword</b>
        </u>
      </p>
      <br></br>
      <p>
        - The using keyword is used to create 'using' directive, which specifies
        a namesapce to be included in the program. This means all the types in
        that namespace can be used without having to qualify their names.
      </p>
      <br></br>
      <p>
        - For example, if a program needs to use types from the System.IO
        namespace, it can inclue a using directive for that namespace at the top
        of the source file like this:
      </p>
      <br></br>
      <p>Using Sytem .IO</p>
      <br></br>
      <p>
        - The using keywords can also be used to create a 'using' statement,
        which is used to automatically dispose of an object when it is no longer
        needed.
      </p>
      <br></br>
      <p>
        - This is useful for managing resources, such as file handles or
        database connections, that need to be closed when they are no longer
        needed
      </p>
      <br></br>
      <p>
        <u>
          <b>Stack overflow</b>
        </u>
      </p>
      <br></br>
      <p>- Occurs if call stack pointer exceeds the stack bound</p>
      <br></br>
      <p>
        - Call stack may consist of a limited amount of address space, often
        determined at the start of the program
      </p>
      <br></br>
      <p>
        - The most common cause of stack overflow is excessively deep recursion,
        in which a function calls itself so many times that the space needs to
        store the variables and information associated with each call more that
        can fit on the stack. An example of infinite recursion:
      </p>
      <br></br>
      <p>
        <i>Public int foo() </i>
      </p>
      <br></br>
      <p>
        <i>{"{"}</i>
      </p>
      <br></br>
      <p>
        <i> return foo();</i>
      </p>
      <br></br>
      <p>
        <i>{"}"}</i>
      </p>
      <br></br>
      <p>
        - The function foo, when it is invoked, continues to invoke itself,
        allocating additional space on the stack each time, until the stack
        overflows resulting in segmentation fault.
      </p>
      <br></br>
      <p>
        <u>
          <b>Stack memory allocation</b>
        </u>
      </p>
      <br></br>
      <p>
        - Stack allocation is the method of allocating memory on the stack in
        .NET. Some important features of stack allocation in .NET included:
      </p>
      <br></br>
      <p>
        - The stack is a region of memory that is used to store local variables
        and function arguments. It is is organized as a last-in, first-out
        (LIFO) data structure, with the most recently allocated memory being the
        first to be deallocated.
      </p>
      <br></br>
      <p>
        - Stack allocation is faster than heap allocation, because the memory is
        automatically deallocated when a function or method completes execution.
        This means there is no need for a garbage collector to monitor the stack
        and reclaim memory.
      </p>
      <br></br>
      <p>
        - Stack allocation is generally used for short-lived variables, such as
        loop counters and function arguments, because the memory is
        automatically deallocated when the function or method completes
        execution.
      </p>
      <br></br>
      <p>
        - The size of the stack is limited, so it is important to avoid using
        excessive amounts of stack memory, as it may cause a stack overflow.
      </p>
      <br></br>
      <p>
        <u>
          <b>Heap memory allocation</b>
        </u>
      </p>
      <br></br>
      <p>
        - Heap allocation is a method of allocating memory dynamically at
        runtime in .NET.
      </p>
      <br></br>
      <p>
        - Objects are stored in the heap, which is a region of memory that is
        managed by the .NET garbage collector
      </p>
      <br></br>
      <p>
        - The heap is divided into two parts: the small object heap and the
        large object heap. Small objects (less than 85,000 bytes) are stored in
        the small object heap, while large objects (greater than 85,000 bytes)
        are stored in the large object heap.
      </p>
      <br></br>
      <p>
        - Objects on the heap are accessed through references. When you create
        an object on the heap, you get a reference to the object on the stack.
      </p>
      <br></br>
      <p>
        - The garbage collector is responsible for managing the heap and
        reclaiming memory that is no longer being used. It runs automatically in
        the background and frees up memory by collecting and destroying objects
        that are no longer reachable.
      </p>
      <br></br>
      <p>
        - Heap allocation is slower than stack allocation because the garbage
        collector has to constantly monitor the heap for objects that are no
        longer being used and reclaim their memory.
      </p>
      <br></br>
      <p>
        <u>
          <b>Reference types vs Value types</b>
        </u>
      </p>
      <br></br>
      <p>
        - Value types (derived from System.ValueType, e.g. int, bool, char, enum
        and struct) can be allocated on the stack or on the heap, depending on
        where they were declared
      </p>
      <br></br>
      <p>
        - If the value type was declared as a variable inside a method then it's
        stored on the stack
      </p>
      <br></br>
      <p>
        - If the value type was declared as a method parameter then it's stored
        on the stack
      </p>
      <br></br>
      <p>
        - If the value type was declared as a member of a class then it's stored
        on the heap, along with its parent
      </p>
      <br></br>
      <p>
        - A value type does hold the value to which it is associated. The
        example below shows a variable x, of type int(value type) and value 2.
        The block of memory associated with x therefore contains the integer 2
        (i.e. its binary representation)
      </p>
      <br></br>
      <p>int x = 2;</p>
      <br></br>
      <p>
        - References are always stored on the stack with the thing that is being
        referenced stored on the heap
      </p>
      <br></br>
      <p>
        <b>6. Concurrency and Asynchronous Programming</b>
      </p>
      <br></br>
      <p>
        <u>
          <b>Threading</b>
        </u>
      </p>
      <br></br>
      <p>
        - Threading is a way for a program to run multiple tasks concurrently,
        or in parallel. In .NET, threading allows you to write programs that can
        take advantage of multiple processor cores on a computer, which can
        greatly improve performance of your program
      </p>
      <br></br>
      <p>
        - Threading is implemented using the System.Threading namespace in .NET,
        which contains classes and methods for creating and managing threads.
        For example, the System.Threading.Thread class provides methods for
        creating and starting new threads, as well as methods for managing the
        state of a thread
      </p>
      <br></br>
      <p>
        - To use threading in your .NET program, you can create a new thread and
        start it by calling the Thread.Start() method. You can then use the
        thread to run a task concurrently with the main thread of your program.
      </p>
      <br></br>
      <p>
        - Threading is useful for a wide variety of tasks, including
        parallelising computationally intensive operations, performing multiple
        tasks concurrently, and creating responsive user interfaces. It can also
        be used to improve the performance of your program by making better use
        of multiple processor cores on a computer
      </p>
      <br></br>
      <p>
        <u>
          <b>Task</b>
        </u>
      </p>
      <br></br>
      <p>
        - .NET framework provides Threading.Tasks class which lets you create
        tasks and run them asynchronously. A task is an object that represents
        some work that should be done. The task can tell if the work is
        completed and if the operation returns a result, the task gives you a
        result.
      </p>
      <br></br>
      <p>
        <u>
          <b>Difference between task and thread</b>
        </u>
      </p>
      <br></br>
      <p>- Task is abstraction on top of threads</p>
      <p>
        - The thread class is used for creating and manipulating a thread in
        Windows. A task represents some asynchronous operation and is part of
        the Task Parallel library, a set of APIs for running tasks
        asynchronously and in parallel
      </p>
      <br></br>
      <p>
        - The task can return a result. There is no direct mechanism to return
        the result from a thread
      </p>
      <br></br>
      <p>
        - Task supports cancellation through use of cancellation tokens but
        thread doesn't. Can chain tasks
      </p>
      <br></br>
      <p>
        <u>
          <b>Async await</b>
        </u>
      </p>
      <br></br>
      <p>- Used to designate methods that contain asynchronous code</p>
      <p>- An example of how async and await might be used in .NET method:</p>
      <p>
        <br></br>
        <i>public async Task&lt;string&gt; GetDataAsync()</i>
      </p>
      <br></br>
      <p>
        <i>{"{"}</i>
      </p>
      <br></br>
      <p>
        <i>// Use the await keyword to wait for the task to complete.</i>
      </p>
      <br></br>
      <p>
        <i> string data = await SomeAsyncMethod();</i>
      </p>
      <br></br>
      <p>
        <i>
          {" "}
          // Now that the task is complete, you can use the data that was
          returned.
        </i>
      </p>
      <br></br>
      <p>
        <i> return data;</i>
      </p>
      <br></br>
      <p>
        <i>{"}"}</i>
      </p>
      <br></br>
      <p>
        - When async method is called, it will immediately return a Task object,
        allowing the calling code to continue executing without blocking.
      </p>
      <br></br>
      <p>
        - The await keyword is used to suspend execution of the GetDataAsync
        method until the SomeAsyncMethod task completes. Once the task
        completes, the await keyword will unblock the GetDataAsync method and
        allow it to continue executing
      </p>
      <br></br>
      <p>
        <b>7. .NET Framework and .NET Core</b>
      </p>
      <br></br>
      <p>
        <u>
          <b>.NET overview</b>
        </u>
      </p>
      <br></br>
      <p>
        .NET is a free, cross-platform, open-source developer platform for
        building many different types of applications. It consists of several
        key components:
      </p>
      <br></br>
      <p>
        <b>Runtime Environments:</b>
      </p>
      <br></br>
      <p>
        .NET Core: A cross-platform runtime for cloud, IoT, and desktop apps.
      </p>
      <br></br>
      <p>
        .NET Framework: The original runtime for Windows desktop applications
        and web services.
      </p>
      <br></br>
      <p>
        Mono: An open-source implementation of the .NET Framework, primarily
        used for running .NET applications on macOS and Linux.
      </p>
      <br></br>
      <p>
        Languages: .NET supports multiple programming languages, including C#,
        F#, and Visual Basic.
      </p>
      <br></br>
      <p>
        <b>Class Libraries: </b>These are pre-built code libraries that provide
        a wide array of functionalities, such as file input/output, database
        interaction, web application development, and more.
      </p>
      <br></br>
      <p>
        <b>Base Class Library (BCL):</b> A core set of libraries that are part
        of the .NET standard, providing common functionality across all .NET
        environments.
      </p>
      <br></br>
      <p>
        <b>Common Language Runtime (CLR): </b>A runtime environment that manages
        the execution of .NET programs, providing services like memory
        management, type safety, exception handling, garbage collection, and
        more.
      </p>
      <br></br>
      <p>
        <b>Frameworks and Tools:</b>
      </p>
      <br></br>
      <p>
        <b>ASP.NET: </b>For building web applications.
      </p>
      <p>
        <b>Entity </b>Framework: For database operations.
      </p>
      <p>
        <b>WinForms and WPF: </b>For desktop applications.
      </p>
      <p>
        <b>Xamarin: </b>For mobile application development.
      </p>
      <p>
        .NET Standard: A formal specification of .NET APIs that are intended to
        be available on all .NET implementations.
      </p>
      <br></br>
      <p>
        In summary, .NET is a platform that provides a comprehensive environment
        for building a wide range of applications using various languages
        (including C#), libraries, and tools. C# is a programming language that
        is designed to work seamlessly with the .NET platform, though it can
        also be used in other contexts. C# is one of the primary languages used
        for writing applications on the .NET platform.
      </p>
      <br></br>
      <p>
        <u>
          <b>Code execution process</b>
        </u>
      </p>
      <br></br>
      <p>The code execution process involves the following two stages:</p>
      <p> 1. Compiler time process</p>
      <p> 2. Runtime process</p>
      <br></br>
      <p>
        - When the compiler compiles, C# code must get converted into machine
        code. However it is first converted into intermediate language code. IL
        code is partially compilled code
      </p>
      <br></br>
      <p>
        - IL code is partially compiled code. We have the JIT compiler which
        runs over the IL and compiles it into machine language
      </p>
      <br></br>
      <p>
        <u>
          <b>.NET Core runtime</b>
        </u>
      </p>
      <br></br>
      <p>
        - Is a lightweight, cross-platform implementation of the .NET framework
        that can be used to build and run a variety of applications, including
        console, web, and cloud-based applications
      </p>
      <br></br>
      <p>
        <u>
          <b>Common Type System (CTS)</b>
        </u>
      </p>
      <br></br>
      <p>
        - CTS ensures that data types defined in two different languages get
        compiled into a common data type
      </p>
      <br></br>
      <p>
        <u>
          <b>Common Language System (CLS)</b>
        </u>
      </p>
      <br></br>
      <p>
        - Set of rules and guidelines for designing libraries and components
        that are intended to be used by multiple porgramming languages.
      </p>
      <br></br>
      <p>
        - It is a subset of the .NET framework that defines a set of
        requirements for language interoperability
      </p>
      <br></br>
      <p>
        - The CLS is designed to ensure that libraries and components written in
        one .NET language can be used by other .NET languages
      </p>
      <br></br>
      <p>
        - For example, if a library is written in C# and follows the CLS, it can
        be used by a program written in Visual Basic or any other .NET languages
      </p>
      <br></br>
      <p>
        - The CLS defines a set of rules for naming conventions, data types, and
        other aspects of library design that are intended to ensure that
        libraries are easy to use and understand for programmers working in any
        .NET language.
      </p>
      <br></br>
      <p>
        <u>
          <b>Managed vs Unmanaged code</b>
        </u>
      </p>
      <br></br>
      <p>
        - Code that executes under the CLR environment is managed code. The CLR
        converts it to native language, the garbage collector frees up memory
        when objects are not being used.
      </p>
      <br></br>
      <p>
        - C++ is unmanaged code. They have their own compilers, their own
        runtimes that CLR doesn't control.
      </p>
      <br></br>
      <p>
        - Managed code is code that runs under the control of the CLR execution
        environment and unmanaged code is code that runs outside the control of
        the CLR. This code has its own runtime, compiler etc. Own way of doing
        memory allocation.
      </p>
      <br></br>
      <p>
        <u>
          <b>Assemblies</b>
        </u>
      </p>
      <br></br>
      <p>
        An assembly is a self-contained unit of functionality that is developed
        and deployed as a single entity. It is the basic unit of deployment in
        .NET, and can be an executable (.exe) or a library (.dll). Assemblies
        contained compiled code (usually in the form of a Microsoft Intermediate
        Language (MSIL)).
      </p>
      <br></br>
      <p>
        <u>
          <b>DLL file</b>
        </u>
      </p>
      <br></br>
      <p>
        In the .NET framework, a DLL (Dynamic Link Library) is a type of file
        that contains compiled code that can be used by other programs. DLL
        files can contain a variety of different types of code, including class
        libraries, utility functions, and graphical user interface elements.
      </p>
      <br></br>
      <p>
        <b>8. Web Development</b>
      </p>
      <br></br>
      <p>
        <u>
          <b>ASP.NET and ASP.NET Core: Building Web Applications</b>
        </u>
      </p>
      <br></br>
      <p>
        <b>ASP.NET Overview</b>
      </p>
      <br></br>
      <p>
        ASP.NET is a mature web framework, part of the .NET Framework, for
        building web applications using .NET. It supports the development of
        dynamic web pages, web services, and web APIs.
      </p>
      <br></br>
      <p>
        <b>Key Features</b>
      </p>
      <br></br>
      <p>
        <b>Web Forms: </b>For creating dynamic web applications using a rich
        component-based model.
      </p>
      <br></br>
      <p>
        <b>MVC Pattern: </b>ASP.NET MVC offers a powerful, patterns-based way to
        build dynamic websites enabling a clean separation of concerns.
      </p>
      <br></br>
      <p>
        <b>Web API: </b>Building RESTful services that can be consumed by a
        variety of clients including browsers and mobile devices.
      </p>
      <br></br>
      <p>
        <b>ASP.NET Core</b>
      </p>
      <br></br>
      <p>
        ASP.NET Core is a redesign of ASP.NET, cross-platform, high-performance,
        open-source framework for building modern, cloud-based,
        Internet-connected applications.
      </p>
      <br></br>
      <p>
        <b>Advancements: </b>Offers improved performance, reduced footprint,
        modular components, and supports cross-platform development.
      </p>
      <br></br>
      <p>
        <b>Features:</b> Dependency injection, asynchronous programming models,
        unified story for building web UI and APIs.
      </p>
      <br></br>
      <p>
        <b>Razor Pages:</b> A simpler way to organize code for pages-based
        scenarios.
      </p>
      <br></br>
      <p>
        <b>Blazor:</b> Enables running C# in the browser on WebAssembly,
        creating interactive web UIs with C# instead of JavaScript.
      </p>
      <br></br>
      <p>
        <u>
          <b>RESTful Services:</b>
        </u>
      </p>
      <br></br>
      <p>
        <b>Concept: </b>RESTful web services implement REST (Representational
        State Transfer) architecture, a lightweight and maintainable approach
        for building web services.
      </p>
      <br></br>
      <p>
        <b>ASP.NET Web API: </b>Ideal for creating RESTful applications on the
        .NET Framework.
      </p>
      <br></br>
      <p>
        <b>ASP.NET Core: </b>Offers improved tools for building RESTful
        services, including integration with popular open-source projects.
      </p>
      <br></br>
      <p>
        Best Practices: Stateless design, use of HTTP methods (GET, POST, PUT,
        DELETE), and HTTP status codes.
      </p>
      <br></br>
      <p>
        <b>9. Database Access</b>
      </p>
      <br></br>
      <p>
        <u>
          <b>Connecting to a DataSource in Ado .NET</b>
        </u>
      </p>
      <br></br>
      <p>
        In Ado .NET, you use a connection object to connect to a specific data
        source by supplying necessary authentication information in a connection
        string. The Connection Object you use depends on the type of data
        source.
      </p>
      <br></br>
      <p>
        <u>
          <b>SQL join</b>
        </u>
      </p>
      <br></br>
      <p>
        Used to combine rows from two or more tables based on a related column
        between them
      </p>
      <br></br>
      <p>
        <u>
          <b>Inner join</b>
        </u>
      </p>
      <br></br>
      <p>Selects record that have matching values in both tables</p>
      <br></br>
      <p>SELECT column_name(s)</p>
      <p>FROM table1</p>
      <p>INNER JOIN table2</p>
      <p>ON table1.column_name = table2.column_name;</p>
      <br></br>
      <p>Table1 is user and table2 is posts</p>
      <br></br>
      <p>
        <u>
          <b>Left (Outer) join</b>
        </u>
      </p>
      <br></br>
      <p>
        Returns all records from the left table, and the matched records from
        the right table
      </p>
      <br></br>
      <p>SELECT column_name (s)</p>
      <p>FROM table1</p>
      <p>LEFT JOIN table2</p>
      <p>ON table1.column_name = table2.column_name;</p>
      <br></br>
      <p>table1 is user and table2 is posts</p>
      <br></br>
      <p>
        <u>
          <b>Right (Outer) join</b>
        </u>
      </p>
      <br></br>
      <p>
        Returns all records from the right table, and then matching records from
        the left table
      </p>
      <br></br>
      <p>SELECT column_name (s)</p>
      <p>FROM table1</p>
      <p>RIGHT JOIN table2</p>
      <p>ON table1.column_name = table2.column_name;</p>
      <br></br>
      <p>table1 is user and table2 is posts</p>
      <br></br>
      <p>
        <u>
          <b>Full (Outer) join</b>
        </u>
      </p>
      <br></br>
      <p>
        Returns all records when there is a match in either left or right table
      </p>
      <br></br>
      <p>SELECT column_name (s)</p>
      <p>FROM table1</p>
      <p>FULL OUTER JOIN table2</p>
      <p>ON table1.column_name = table2.column_name</p>
      <p>WHERE condition;</p>
      <br></br>
      <p>Table1 is user and table2 is posts</p>
      <br></br>
      <p>
        <u>
          <b>Join table / multiple joins</b>
        </u>
      </p>
      <br></br>
      <p>Given the following tables:</p>
      <br></br>
      <p>
        <b>Image</b>
      </p>
      <br></br>
      <p>Use the following query:</p>
      <br></br>
      <p>SELECT *</p>
      <p> FROM RECIPES r</p>
      <p> JOIN RECIPEINGREDIENTS ri ON ri.recipe_id = r.id</p>
      <p>
        {" "}
        JOIN INGREDIENTS i ON i .id = ri.ingredients_id AND i.name IN
        ('chocolate', 'cream')
      </p>
      <br></br>
      <p>
        <u>
          <b>Difference between SQL and NoSQL database</b>
        </u>
      </p>
      <br></br>
      <p>Five critical differences between SQL and NoSQL databases:</p>
      <br></br>
      <p>1. SQL databases are relational. NoSQL databases are non-relational</p>
      <br></br>
      <p>
        2. SQL databases are structured query language and have a predefined
        schema. NoSQL databases have dynamic schemas for unstructured data
      </p>
      <br></br>
      <p>
        3. SQL databases are vertically scalable, while NoSQL databases are
        horizontally scalable
      </p>
      <br></br>
      <p>
        4. SQL databases are table-based, while NoSQL databases are document,
        key-value, graph, or wide-column stores
      </p>
      <br></br>
      <p>
        5. SQL databases are better for multi-row transactions, while NoSQL is
        better for unstructured data like documents or JSON
      </p>
      <br></br>
      <p>
        <u>
          <b>Database Indexing</b>
        </u>
      </p>
      <br></br>
      <p>
        - Technique used to improve performance of database queries. An index is
        a data structure that allows efficient retrieval of data from a database
        table
      </p>
      <br></br>
      <p>
        - When a database table is indexed, a separate data structure is created
        that contains a reference to each record in the table. This data
        structure is organised in such a way to allows fast searching and
        sorting of records in the table
      </p>
      <br></br>
      <p>
        - For example, imagine you have a table of customer records, with each
        record containing information about a particular customer, such as their
        name, address, and phone number. If you want to find a particular
        customer by their name, you would have to search through every record in
        the table to find the one you're looking for.
      </p>
      <br></br>
      <p>
        - However, if this table is indexed by name, the database can use the
        index to quickly find the record you're looking for, without having to
        search through every record in the table. This can greatly improve the
        performance of your database queries, especially on large tables
      </p>
      <br></br>
      <p>
        In database systems, indexes are used to speed up the retrieval of data
        from a table. There are two main types of indexes: clustered and
        non-clustered, and they differ in how they store data and impact data
        retrieval.
      </p>
      <br></br>
      <p>
        <b>Clustered Index:</b>
      </p>
      <br></br>
      <p>
        <b>Storage: </b>In a clustered index, the data in the table is
        physically stored in the order of the index. There can be only one
        clustered index per table, as the data rows themselves can be sorted in
        only one order.
      </p>
      <br></br>
      <p>
        <b>Data Retrieval:</b> Since the data is stored in index order, reading
        data using the clustered index can be very fast, especially for range
        queries.
      </p>
      <br></br>
      <p>
        <b>Modification Impact: </b>Inserting, updating, or deleting rows can be
        more expensive, as the data rows might need to be moved to maintain
        order.
      </p>
      <br></br>
      <p>
        <b>Usage:</b> It's typically used for columns that are often accessed in
        a sequential manner, such as primary keys.
      </p>
      <br></br>
      <p>
        <b>Non-Clustered Index:</b>
      </p>
      <br></br>
      <p>
        <b>Storage:</b> A non-clustered index creates a separate structure from
        the data rows. It contains a copy of the indexed column’s data along
        with a pointer to the data row that contains the corresponding value. As
        such, multiple non-clustered indexes can be created on a table.
      </p>
      <br></br>
      <p>
        <b>Data Retrieval: </b>When a non-clustered index is used, the database
        first looks up the index to find the location of the data row, then
        retrieves the data from the table. This two-step process can be slower
        than using a clustered index for the same data.
      </p>
      <br></br>
      <p>
        <b>Modification Impact:</b> Modifications are generally faster than with
        a clustered index, as the data rows themselves don't need to be moved;
        only the index needs to be updated.
      </p>
      <br></br>
      <p>
        <b>Usage:</b> Non-clustered indexes are suitable for columns used in
        search conditions (WHERE clauses) or for indexing a wide range of
        columns.
      </p>
      <br></br>
      <p>
        In summary, the choice between clustered and non-clustered indexes
        depends on the nature of the data, the types of queries run against the
        database, and the specific performance requirements. A clustered index
        is ideal for columns that are frequently accessed sequentially, while
        non-clustered indexes are better for columns used in various search
        conditions and where multiple indexes on different columns are needed.
      </p>
      <br></br>
      <p>
        <b>10. Software Design and Architecture</b>
      </p>
      <br></br>
      <p>
        <u>
          <b>Four pillars of OOP</b>
        </u>
      </p>
      <br></br>
      <p>
        <b>Abstraction</b>
      </p>
      <br></br>
      <p>
        - Finding things that are generic in your code and providing a generic
        function or object to serve multiple places/with multiple concerns
      </p>
      <br></br>
      <p>
        <b>Encapsulation</b>
      </p>
      <br></br>
      <p>- Each object in your code should control its own state</p>
      <br></br>
      <p>
        - Put implementation into private methods so that these methods cannot
        be called from outside the object
      </p>
      <br></br>
      <p>
        <b>Inheritance</b>
      </p>
      <br></br>
      <p>
        - Lets one object acquire the properties and methods of another object
      </p>
      <br></br>
      <p>
        - Related in the Liskov substitution principle. It states that if you
        can use a parent class anywhere you use a child - and ChildType inherits
        from ParentType - then you pass the test
      </p>
      <br></br>
      <p>- Use shape example</p>
      <br></br>
      <p>
        <b>Polymorphism</b>
      </p>
      <br></br>
      <p>
        - When two types share an inheritance chain, they can be used
        interchangably with no errors or assertions in your code
      </p>
      <br></br>
      <p>- Use shape example</p>
      <br></br>
      <p>
        <u>
          <b>SOLID Principles</b>
        </u>
      </p>
      <br></br>
      <p>
        <b>Single Responsibility Principle</b>
      </p>
      <br></br>
      <p>
        - A class should have one and only one reason to change, meaning that a
        class should have only one job
      </p>
      <br></br>
      <p>
        <b>Open-Closed Principle</b>
      </p>
      <br></br>
      <p>- A class should be extendable without modifying the class itself</p>
      <br></br>
      <p>
        <b>Liskov Substitution Principle</b>
      </p>
      <br></br>
      <p>
        - This means every subclass or derived class should be substitutable for
        their base or parent class
      </p>
      <br></br>
      <p>
        - Subtypes should not break the contracts set by their parent types. In
        practical terms, this means that if a given function uses some object,
        then you should be able to replace that object with one of its subtypes
        without anything breaking
      </p>
      <br></br>
      <p>
        <b>Interface Segregation Principle</b>
      </p>
      <br></br>
      <p>
        - A client should never be forced to implement an interface that it does
        not use, or clients shouldn't be forced to depend on methods they do not
        use.
      </p>
      <br></br>
      <p>
        - It is better to have many small, specific interfaces than a few large,
        general ones.
      </p>
      <br></br>
      <p>
        - Used to improve the design of a program by making it more modular and
        adaptable
      </p>
      <br></br>
      <p>
        <b>Dependency Inversion Principle</b>
      </p>
      <br></br>
      <p>
        - States that high-level modules should not depend on low-level modules,
        but rather should depend on abstractions. Ie. the design of a program
        should not depend on the details of how its components are implemented
        but rather on the interfaces that define how those components interact
      </p>
      <br></br>
      <p>
        - E.g. if a high-level module in your program uses a database class, it
        should be implemented behind an abstraction such as an interface called
        IDatabase
      </p>
      <br></br>
      <p>
        <u>
          <b>Model View Presenter design pattern</b>
        </u>
      </p>
      <br></br>
      <p>
        - A derivation of the model-view-controller (MVC) architectural pattern,
        and it is used mostly for building interfaces
      </p>
      <br></br>
      <p>
        - The pattern is used to separate the logic of the application from its
        user interface, allowing for more modular and testable code
      </p>
      <br></br>
      <p>
        - In MVP, the presenter acts as a middleman between the model and the
        view. The model represents the data and business logic of the
        application, while the view is the user interface that displays data to
        the user
      </p>
      <br></br>
      <p>
        - The presenter is responsible for updating the view with data from the
        model and handling any user interactions with the view. This separation
        of concerns makes it easier to develop, test, and maintain the
        application.
      </p>
      <br></br>
      <p>
        - One of the key benefits of using the MVP pattern is that it allows for
        clear separation of concerns between different components of the
        application
      </p>
      <br></br>
      <p>
        - This makes it easier to modify and update the application without
        affecting other parts of the code. Additionally, because the presenter
        is responsible for updating the view, the view can be easily replaced
        without affecting the underlying business logic of the application. This
        can be useful when developing applications for multiple platforms or
        when making significant changes to the user interface
      </p>
      <br></br>
      <p>
        <u>
          <b>Model View Controller design pattern</b>
        </u>
      </p>
      <br></br>
      <p>
        - Commonly used in development of user interfaces. Pattern is used to
        separate logic of the application from its user interface, allowing for
        more modular and testable code.
      </p>
      <br></br>
      <p>
        - In MVC, the controller acts as a middleman between the model and the
        view. The model represents the data and business logic of the
        application, while the view is the user interface that displays the data
        to the user.
      </p>
      <br></br>
      <p>
        - The controller is responsible for handling user input and updating the
        view and the model as necessary. This separation of concerns makes it
        easier to develop, test, and maintain the application.
      </p>
      <br></br>
      <p>
        - One of the key benefits of using the MVC pattern is that it allows for
        a clear separation of concerns between different components of the
        application.
      </p>
      <br></br>
      <p>
        - This makes it easier to modify and update the application without
        affecting the other parts of the code.
      </p>
      <br></br>
      <p>
        - Additionally, because the controller is responsible for handling user
        input and updating the view and the model, the view and the model can be
        easily replaced without affecting the underlying business logic of the
        application.
      </p>
      <br></br>
      <p>
        - This can be useful when developing applications for multiple platforms
        or when making significant changes to the user interface
      </p>
      <br></br>
      <p>
        <b>11. Testing and Debugging</b>
      </p>
      <br></br>
      <p>
        <u>
          <b>Unit Testing</b>
        </u>
      </p>
      <br></br>
      <p>
        Unit testing involves testing individual components of an application in
        isolation to ensure that each part functions correctly.
      </p>
      <br></br>
      <p>
        <b>Frameworks:</b>
      </p>
      <br></br>
      <p>
        <b>NUnit:</b> One of the earliest testing frameworks for .NET, inspired
        by JUnit. It provides a wide range of assertions and is known for its
        simplicity and effectiveness.
      </p>
      <br></br>
      <p>
        <b>xUnit: </b>A more modern framework, xUnit is often praised for its
        extensibility and support for parallel test execution.
      </p>
      <br></br>
      <p>
        <b>MSTest: </b>Microsoft's official testing framework, integrated with
        Visual Studio. It's convenient for developers working within the
        Microsoft ecosystem.
      </p>
      <br></br>
      <p>
        <b>Evolution:</b> Over time, these frameworks have incorporated features
        like mocking, data-driven testing, and integration with CI/CD pipelines.
      </p>
      <br></br>
      <p>
        <u>
          <b>Integration Testing</b>
        </u>
      </p>
      <br></br>
      <p>
        Focuses on testing the interactions between different parts of the
        application, as well as the application's interactions with external
        systems like databases or web services.
      </p>
      <br></br>
      <p>
        <b>Strategies</b>
      </p>
      <br></br>
      <p>
        <b>Test Environments: </b>Setting up environments that mimic production
        to ensure tests are realistic.
      </p>
      <br></br>
      <p>
        <b>Mocking and Stubbing: </b>Using tools like Moq or NSubstitute to
        simulate external dependencies.
      </p>
      <br></br>
      <p>
        <b>Continuous Integration (CI): </b>Automated integration testing as
        part of CI pipelines to catch issues early in the development cycle.
      </p>
      <br></br>
      <p>
        <b>Trends: </b>Integration testing has become more automated and
        integrated into the software development lifecycle, particularly with
        the rise of DevOps and Agile methodologies.
      </p>
      <br></br>
      <p>
        <b>12. Other</b>
      </p>
      <br></br>
      <p>
        <u>
          <b>“==” vs “===” in Javascript</b>
        </u>
      </p>
      <br></br>
      <p>
        - The '==' operator performs a 'loose' comparison which means that it
        will compare the values of the operands after converting them to a
        common type
      </p>
      <br></br>
      <p>
        - The '===' opeartor performs a 'strict' comparison, which means that it
        will compare the values of the operands without converting them to a
        common type.
      </p>
      <br></br>
      <p>
        <i>// Comparison of a string and a number with ==</i>
      </p>
      <br></br>
      <p>
        <i>var m = '1';</i>
      </p>
      <br></br>
      <p>
        <i>var n = 1;</i>
      </p>
      <br></br>
      <p>
        <i>console.log(m == n); // Output: true</i>
      </p>
      <br></br>
      <p>
        <i>// Comparison of a string and a number with ===</i>
      </p>
      <br></br>
      <p>
        <i>var t = '1';</i>
      </p>
      <br></br>
      <p>
        <i>var u = 1;</i>
      </p>
      <br></br>
      <p>
        <i>console.log(t === u); // Output: false</i>
      </p>
      <br></br>
    </div>
  );
};
export default DotNet;
