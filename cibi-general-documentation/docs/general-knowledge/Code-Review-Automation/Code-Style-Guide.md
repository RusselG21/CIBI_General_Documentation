#

## StyleCop Configuration

StyleCop is a static code analysis tool that enforces a set of style and consistency rules for C# code. Below are the settings used in our StyleCop configuration for YourCompanyName:

```json
{
  "settings": {
    "documentationRules": {
      "companyName": "YourCompanyName",
      "documentExposedElements": true,
      "documentInternalElements": true,
      "documentPrivateElements": true,
      "documentInterfaces": true,
      "documentConstructors": true,
      "documentEvents": true,
      "documentFields": true,
      "documentProperties": true,
      "documentMethods": true
    }
  }
}
```

#### Sample Code Violating the Rules

Below is an example of code that violates the StyleCop rules:

```csharp
public class SampleClass
{
    public int publicField;
    private string privateField;

    public SampleClass()
    {
        // Constructor
    }

    public void PublicMethod()
    {
        // Method
    }

    private void PrivateMethod()
    {
        // Method
    }
}
```

##### Correct Approach

Here is the corrected version of the code adhering to the StyleCop rules:

```csharp
/// <summary>
/// Represents a sample class.
/// </summary>
public class SampleClass
{
    /// <summary>
    /// A public field.
    /// </summary>
    public int publicField;

    /// <summary>
    /// A private field.
    /// </summary>
    private string privateField;

    /// <summary>
    /// Initializes a new instance of the <see cref="SampleClass"/> class.
    /// </summary>
    public SampleClass()
    {
        // Constructor
    }

    /// <summary>
    /// A public method.
    /// </summary>
    public void PublicMethod()
    {
        // Method
    }

    /// <summary>
    /// A private method.
    /// </summary>
    private void PrivateMethod()
    {
        // Method
    }
}
```

# Code Style and Formatting Rules

## Roslyn Analyzer Settings

### ⚙️ dotnet_style_qualification_for_field

This rule requires explicit `this.` for field access to improve code readability and maintainability.

#### Sample Code Violating the Rule

Below is an example of code that violates the `dotnet_style_qualification_for_field` rule:

```csharp
public class QualificationExample
{
    private int field;

    public void Method()
    {
        field = 10;
    }
}
```

###### Correct Approach

Here is the corrected version of the code adhering to the `dotnet_style_qualification_for_field` rule:

```csharp
public class QualificationExample
{
    private int field;

    public void Method()
    {
        this.field = 10;
    }
}
```

---

### ⚙️ dotnet_style_qualification_for_property

This rule requires explicit `this.` for property access to improve code readability and maintainability.

#### Sample Code Violating the Rule

Below is an example of code that violates the `dotnet_style_qualification_for_property` rule:

```csharp
public class QualificationPropertyExample
{
    public int Property { get; set; }

    public void Method()
    {
        Property = 10;
    }
}
```

##### Correct Approach

Here is the corrected version of the code adhering to the `dotnet_style_qualification_for_property` rule:

```csharp
public class QualificationPropertyExample
{
    public int Property { get; set; }

    public void Method()
    {
        this.Property = 10;
    }
}
```

---

### ⚙️ dotnet_style_qualification_for_method

This rule requires explicit `this.` for method calls to improve code readability and maintainability.

#### Sample Code Violating the Rule

Below is an example of code that violates the `dotnet_style_qualification_for_method` rule:

```csharp
public class QualificationMethodExample
{
    public void Method()
    {
        AnotherMethod();
    }

    private void AnotherMethod()
    {
        // Method implementation
    }
}
```

##### Correct Approach

Here is the corrected version of the code adhering to the `dotnet_style_qualification_for_method` rule:

```csharp
public class QualificationMethodExample
{
    public void Method()
    {
        this.AnotherMethod();
    }

    private void AnotherMethod()
    {
        // Method implementation
    }
}
```

---

### ⚙️ dotnet_style_qualification_for_event

This rule requires explicit `this.` for event access to improve code readability and maintainability.

#### Sample Code Violating the Rule

Below is an example of code that violates the `dotnet_style_qualification_for_event` rule:

```csharp
public class QualificationEventExample
{
    public event EventHandler MyEvent;

    public void Method()
    {
        MyEvent?.Invoke(this, EventArgs.Empty);
    }
}
```

##### Correct Approach

Here is the corrected version of the code adhering to the `dotnet_style_qualification_for_event` rule:

```csharp
public class QualificationEventExample
{
    public event EventHandler MyEvent;

    public void Method()
    {
        this.MyEvent?.Invoke(this, EventArgs.Empty);
    }
}
```

---

### ⚙️ dotnet_style_predefined_type_for_locals_parameters_members

This rule prefers predefined types (e.g., `int` over `Int32`) for locals, parameters, and members to improve code readability and consistency.

#### Sample Code Violating the Rule

Below is an example of code that violates the `dotnet_style_predefined_type_for_locals_parameters_members` rule:

```csharp
public class PredefinedTypeExample
{
    public void Method()
    {
        System.Int32 x = 10;
    }
}
```

##### Correct Approach

Here is the corrected version of the code adhering to the `dotnet_style_predefined_type_for_locals_parameters_members` rule:

```csharp
public class PredefinedTypeExample
{
    public void Method()
    {
        int x = 10;
    }
}
```

---

### ⚙️ dotnet_style_predefined_type_for_member_access

This rule prefers predefined types for member access to improve code readability and consistency.

#### Sample Code Violating the Rule

Below is an example of code that violates the `dotnet_style_predefined_type_for_member_access` rule:

```csharp
public class PredefinedTypeMemberAccessExample
{
    public void Method()
    {
        System.Int32 x = System.Int32.MaxValue;
    }
}
```

##### Correct Approach

Here is the corrected version of the code adhering to the `dotnet_style_predefined_type_for_member_access` rule:

```csharp
public class PredefinedTypeMemberAccessExample
{
    public void Method()
    {
        int x = int.MaxValue;
    }
}
```

---

### ⚙️ dotnet_style_object_initializer

This rule encourages the use of object initializers to improve code readability and maintainability.

#### Sample Code Violating the Rule

Below is an example of code that violates the `dotnet_style_object_initializer` rule:

```csharp
public class ObjectInitializerExample
{
    public void Method()
    {
        var obj = new SampleClass();
        obj.Property = 10;
    }
}
```

##### Correct Approach

Here is the corrected version of the code adhering to the `dotnet_style_object_initializer` rule:

```csharp
public class ObjectInitializerExample
{
    public void Method()
    {
        var obj = new SampleClass { Property = 10 };
    }
}
```

---

### ⚙️ dotnet_style_collection_initializer

This rule encourages the use of collection initializers to improve code readability and maintainability.

#### Sample Code Violating the Rule

Below is an example of code that violates the `dotnet_style_collection_initializer` rule:

```csharp
public class CollectionInitializerExample
{
    public void Method()
    {
        var list = new List<int>();
        list.Add(1);
        list.Add(2);
    }
}
```

##### Correct Approach

Here is the corrected version of the code adhering to the `dotnet_style_collection_initializer` rule:

```csharp
public class CollectionInitializerExample
{
    public void Method()
    {
        var list = new List<int> { 1, 2 };
    }
}
```

---

### ⚙️ dotnet_style_explicit_tuple_names

This rule prefers explicit tuple element names to improve code readability and maintainability.

#### Sample Code Violating the Rule

Below is an example of code that violates the `dotnet_style_explicit_tuple_names` rule:

```csharp
public class TupleNamesExample
{
    public void Method()
    {
        var tuple = (1, "example");
    }
}
```

##### Correct Approach

Here is the corrected version of the code adhering to the `dotnet_style_explicit_tuple_names` rule:

```csharp
public class TupleNamesExample
{
    public void Method()
    {
        var tuple = (Id: 1, Name: "example");
    }
}
```

---

### ⚙️ dotnet_style_coalesce_expression

This rule encourages the use of the null-coalescing operator (`??`) to improve code readability and maintainability.

#### Sample Code Violating the Rule

Below is an example of code that violates the `dotnet_style_coalesce_expression` rule:

```csharp
public class CoalesceExpressionExample
{
    public void Method(string input)
    {
        string result = input != null ? input : "default";
    }
}
```

##### Correct Approach

Here is the corrected version of the code adhering to the `dotnet_style_coalesce_expression` rule:

```csharp
public class CoalesceExpressionExample
{
    public void Method(string input)
    {
        string result = input ?? "default";
    }
}
```

---

### ⚙️ dotnet_style_null_propagation

This rule encourages the use of the null-conditional operator (`?.`) to improve code readability and maintainability.

#### Sample Code Violating the Rule

Below is an example of code that violates the `dotnet_style_null_propagation` rule:

```csharp
public class NullPropagationExample
{
    public void Method(SampleClass obj)
    {
        if (obj != null)
        {
            obj.Method();
        }
    }
}
```

##### Correct Approach

Here is the corrected version of the code adhering to the `dotnet_style_null_propagation` rule:

```csharp
public class NullPropagationExample
{
    public void Method(SampleClass obj)
    {
        obj?.Method();
    }
}
```

---

### ⚙️ dotnet_style_prefer_is_null_check_over_reference_equality_method

This rule prefers the use of `is null` over reference equality to improve code readability and maintainability.

#### Sample Code Violating the Rule

Below is an example of code that violates the `dotnet_style_prefer_is_null_check_over_reference_equality_method` rule:

```csharp
public class IsNullCheckExample
{
    public void Method(SampleClass obj)
    {
        if (obj == null)
        {
            // Do something
        }
    }
}
```

##### Correct Approach

Here is the corrected version of the code adhering to the `dotnet_style_prefer_is_null_check_over_reference_equality_method` rule:

```csharp
public class IsNullCheckExample
{
    public void Method(SampleClass obj)
    {
        if (obj is null)
        {
            // Do something
        }
    }
}
```

---

### C# Code Style Preferences

### ⚙️ csharp_prefer_braces

This rule requires braces `{}` for control blocks to improve code readability and maintainability.

#### Sample Code Violating the Rule

Below is an example of code that violates the `csharp_prefer_braces` rule:

```csharp
public class BracesExample
{
    public void Method(bool condition)
    {
        if (condition)
            Console.WriteLine("Condition met");
    }
}
```

##### Correct Approach

Here is the corrected version of the code adhering to the `csharp_prefer_braces` rule:

```csharp
public class BracesExample
{
    public void Method(bool condition)
    {
        if (condition)
        {
            Console.WriteLine("Condition met");
        }
    }
}
```

---

### ⚙️ csharp_style_allow_embedded_statements_on_same_line

This rule disallows single-line control statements to improve code readability and maintainability.

#### Sample Code Violating the Rule

Below is an example of code that violates the `csharp_style_allow_embedded_statements_on_same_line` rule:

```csharp
public class EmbeddedStatementsExample
{
    public void Method(bool condition)
    {
        if (condition) Console.WriteLine("Condition met");
    }
}
```

##### Correct Approach

Here is the corrected version of the code adhering to the `csharp_style_allow_embedded_statements_on_same_line` rule:

```csharp
public class EmbeddedStatementsExample
{
    public void Method(bool condition)
    {
        if (condition)
        {
            Console.WriteLine("Condition met");
        }
    }
}
```

---

### ⚙️ csharp_style_expression_bodied_methods

This rule prefers block bodies for methods to improve code readability and maintainability.

#### Sample Code Violating the Rule

Below is an example of code that violates the `csharp_style_expression_bodied_methods` rule:

```csharp
public class ExpressionBodiedMethodsExample
{
    public int Add(int a, int b) => a + b;
}
```

##### Correct Approach

Here is the corrected version of the code adhering to the `csharp_style_expression_bodied_methods` rule:

```csharp
public class ExpressionBodiedMethodsExample
{
    public int Add(int a, int b)
    {
        return a + b;
    }
}
```

---

### ⚙️ csharp_style_expression_bodied_constructors

This rule prefers block bodies for constructors to improve code readability and maintainability.

#### Sample Code Violating the Rule

Below is an example of code that violates the `csharp_style_expression_bodied_constructors` rule:

```csharp
public class ExpressionBodiedConstructorsExample
{
    public ExpressionBodiedConstructorsExample() => Console.WriteLine("Constructor");
}
```

##### Correct Approach

Here is the corrected version of the code adhering to the `csharp_style_expression_bodied_constructors` rule:

```csharp
public class ExpressionBodiedConstructorsExample
{
    public ExpressionBodiedConstructorsExample()
    {
        Console.WriteLine("Constructor");
    }
}
```

---

### ⚙️ csharp_style_expression_bodied_operators

This rule prefers block bodies for operators to improve code readability and maintainability.

#### Sample Code Violating the Rule

Below is an example of code that violates the `csharp_style_expression_bodied_operators` rule:

```csharp
public class ExpressionBodiedOperatorsExample
{
    public static ExpressionBodiedOperatorsExample operator +(ExpressionBodiedOperatorsExample a, ExpressionBodiedOperatorsExample b) => new ExpressionBodiedOperatorsExample();
}
```

##### Correct Approach

Here is the corrected version of the code adhering to the `csharp_style_expression_bodied_operators` rule:

```csharp
public class ExpressionBodiedOperatorsExample
{
    public static ExpressionBodiedOperatorsExample operator +(ExpressionBodiedOperatorsExample a, ExpressionBodiedOperatorsExample b)
    {
        return new ExpressionBodiedOperatorsExample();
    }
}
```

---

### ⚙️ csharp_style_expression_bodied_properties

This rule prefers expression-bodied properties to improve code readability and maintainability.

#### Sample Code Violating the Rule

Below is an example of code that violates the `csharp_style_expression_bodied_properties` rule:

```csharp
public class ExpressionBodiedPropertiesExample
{
    private int _value;

    public int Value
    {
        get { return _value; }
        set { _value = value; }
    }
}
```

##### Correct Approach

Here is the corrected version of the code adhering to the `csharp_style_expression_bodied_properties` rule:

```csharp
public class ExpressionBodiedPropertiesExample
{
    public int Value { get; set; }
}
```

---

### ⚙️ csharp_style_expression_bodied_indexers

This rule prefers expression-bodied indexers to improve code readability and maintainability.

#### Sample Code Violating the Rule

Below is an example of code that violates the `csharp_style_expression_bodied_indexers` rule:

```csharp
public class ExpressionBodiedIndexersExample
{
    private int[] _values = new int[10];

    public int this[int index]
    {
        get { return _values[index]; }
        set { _values[index] = value; }
    }
}
```

##### Correct Approach

Here is the corrected version of the code adhering to the `csharp_style_expression_bodied_indexers` rule:

```csharp
public class ExpressionBodiedIndexersExample
{
    private int[] _values = new int[10];

    public int this[int index]
    {
        get => _values[index];
        set => _values[index] = value;
    }
}
```

---

### ⚙️ csharp_style_expression_bodied_accessors

This rule prefers expression-bodied accessors to improve code readability and maintainability.

#### Sample Code Violating the Rule

Below is an example of code that violates the `csharp_style_expression_bodied_accessors` rule:

```csharp
public class ExpressionBodiedAccessorsExample
{
    private int _value;

    public int Value
    {
        get { return _value; }
        set { _value = value; }
    }
}
```

##### Correct Approach

Here is the corrected version of the code adhering to the `csharp_style_expression_bodied_accessors` rule:

```csharp
public class ExpressionBodiedAccessorsExample
{
    public int Value { get; set; }
}
```
