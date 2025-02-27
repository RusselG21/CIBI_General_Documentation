# 🚀 Vertical Slice Architecture in .NET 9

## 📌 Introduction

Vertical Slice Architecture is a way of structuring applications by focusing on features rather than layers. Instead of dividing the project into traditional horizontal layers (Controllers, Services, Repositories, etc.), we organize it by features, making it more modular, maintainable, and scalable.

In this guide, we will build a .NET 9 project using Vertical Slice Architecture. We will use:

- 📌 **Entity Framework Core** for writing data
- ⚡ **Dapper** for reading data
- 📢 **MediatR** with **IPipelineBehavior** for request handling and error logging
- 🔥 **Carter** for Minimal APIs
- 🔄 **Mapster** for mapping DTOs
- ✅ **XUnit** and **FluentAssertions** for testing

Additionally, we will centralize all package dependencies into a separate **Building Blocks** project for better maintainability and to facilitate microservices transition.

## 📦 Required Packages and Explanations

### 📥 Install Required Packages

To install all necessary packages, run the following CLI command:

```sh
 dotnet add package Carter
 dotnet add package MediatR
 dotnet add package MediatR.Extensions.Microsoft.DependencyInjection
 dotnet add package Mapster
 dotnet add package Mapster.DependencyInjection
 dotnet add package Microsoft.EntityFrameworkCore
 dotnet add package Microsoft.EntityFrameworkCore.SqlServer
 dotnet add package Dapper
 dotnet add package Serilog.AspNetCore
 dotnet add package XUnit
 dotnet add package FluentAssertions
```

### 🔥 **Carter**

A library for creating Minimal APIs in .NET with more flexibility.

```csharp
public class OrderModule : CarterModule
{
    public OrderModule() : base("/orders")
    {
        Get("/", async (IMediator mediator) => await mediator.Send(new GetOrdersQuery()));
    }
}
```

### 📢 **MediatR & MediatR.Extensions.Microsoft.DependencyInjection**

Implements the CQRS pattern and enables handlers for request/response patterns.

```csharp
public class CreateOrderCommand : IRequest<int>
{
    public string ProductName { get; set; }
    public int Quantity { get; set; }
}
```

### 🔄 **Mapster & Mapster.DependencyInjection**

Used for mapping DTOs to entities efficiently.

```csharp
public class MappingProfiles : IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config.NewConfig<Order, OrderDto>();
    }
}
```

### 🏗 **Entity Framework Core**

For writing data and managing database operations.

```csharp
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    public DbSet<Order> Orders { get; set; }
}
```

### ⚡ **Dapper**

Lightweight ORM for optimized read operations.

```csharp
public class DapperContext
{
    private readonly IConfiguration _configuration;
    public DapperContext(IConfiguration configuration) => _configuration = configuration;

    public IDbConnection CreateConnection() => new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
}
```

### 📊 **Serilog.AspNetCore**

Logging middleware for request tracing and error handling.

```csharp
public class LoggingMiddleware
{
    private readonly RequestDelegate _next;
    public LoggingMiddleware(RequestDelegate next) => _next = next;

    public async Task Invoke(HttpContext context, ILogger<LoggingMiddleware> logger)
    {
        logger.LogInformation("Handling request: {Path}", context.Request.Path);
        await _next(context);
    }
}
```

### ✅ **FluentAssertions & XUnit**

For unit testing with fluent syntax.

```csharp
public class OrderTests
{
    [Fact]
    public void Should_Create_Order()
    {
        var order = new Order { ProductName = "Laptop", Quantity = 1 };
        order.Should().NotBeNull();
        order.ProductName.Should().Be("Laptop");
        order.Quantity.Should().Be(1);
    }
}
```

## 📂 Folder Structure

```
📂 MyProject
 ┣ 📂 src
 ┃ ┣ 📂 Features
 ┃ ┃ ┣ 📂 Orders
 ┃ ┃ ┃ ┣ 📂 CreateOrder
 ┃ ┃ ┃ ┃ ┣ 📜 CreateOrderCommand.cs
 ┃ ┃ ┃ ┃ ┣ 📜 CreateOrderHandler.cs
 ┃ ┃ ┃ ┃ ┣ 📜 CreateOrderEndpoint.cs
 ┃ ┃ ┃ ┣ 📂 UpdateOrder
 ┃ ┃ ┃ ┃ ┣ 📜 UpdateOrderCommand.cs
 ┃ ┃ ┃ ┃ ┣ 📜 UpdateOrderHandler.cs
 ┃ ┃ ┃ ┃ ┣ 📜 UpdateOrderEndpoint.cs
 ┃ ┃ ┃ ┣ 📂 DeleteOrder
 ┃ ┃ ┃ ┃ ┣ 📜 DeleteOrderCommand.cs
 ┃ ┃ ┃ ┃ ┣ 📜 DeleteOrderHandler.cs
 ┃ ┃ ┃ ┃ ┣ 📜 DeleteOrderEndpoint.cs
 ┃ ┃ ┃ ┣ 📂 GetOrders
 ┃ ┃ ┃ ┃ ┣ 📜 GetOrdersQuery.cs
 ┃ ┃ ┃ ┃ ┣ 📜 GetOrdersHandler.cs
 ┃ ┃ ┃ ┃ ┣ 📜 GetOrdersEndpoint.cs
 ┃ ┃ ┃ ┣ 📜 OrderDto.cs
 ┃ ┃ ┣ 📂 Products (New Feature)
 ┃ ┃ ┃ ┣ 📂 CreateProduct
 ┃ ┃ ┃ ┃ ┣ 📜 CreateProductCommand.cs
 ┃ ┃ ┃ ┃ ┣ 📜 CreateProductHandler.cs
 ┃ ┃ ┃ ┃ ┣ 📜 CreateProductEndpoint.cs
 ┃ ┣ 📂 Infrastructure
 ┃ ┃ ┣ 📂 Persistence
 ┃ ┃ ┃ ┣ 📜 AppDbContext.cs
 ┃ ┃ ┃ ┣ 📜 DapperContext.cs
 ┃ ┃ ┣ 📂 Logging
 ┃ ┃ ┃ ┣ 📜 LoggingMiddleware.cs
 ┃ ┃ ┣ 📜 DependencyInjection.cs
 ┃ ┣ 📂 API
 ┃ ┃ ┣ 📜 Program.cs
 ┣ 📂 BuildingBlocks
 ┃ ┣ 📜 BuildingBlocks.csproj (All package references)
 ┣ 📂 tests
 ┃ ┣ 📂 FeatureTests
 ┃ ┃ ┣ 📜 OrderTests.cs
 ┃ ┃ ┣ 📜 ProductTests.cs (New Feature Test)
 ┃ ┣ 📜 Tests.csproj
 ┣ 📜 README.md
```

## 🏁 Conclusion

To make this project robust and scalable:

- ✅ **Follow Vertical Slice Architecture** to keep features modular and maintainable.
- 📢 **Use MediatR for CQRS** to separate commands and queries.
- 🏗 **Centralize dependencies in Building Blocks** for easier microservices transition.
- 🔥 **Leverage EF Core for writing and Dapper for optimized reads** for best performance.
- 📊 **Implement structured logging with Serilog** to track requests and errors.
- ✅ **Write unit tests using XUnit & FluentAssertions** to ensure system reliability.
- 🏗 **Use Dependency Injection for better maintainability and testing.**
- ⚡ **Consider implementing caching mechanisms** like Redis to improve performance.
- 🚨 **Ensure proper error handling and middleware** to handle exceptions gracefully.

By following these principles, this project will be robust, maintainable, and ready for scaling into microservices if needed.
