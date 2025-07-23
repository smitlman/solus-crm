using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);

// ...existing code...
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.Run();