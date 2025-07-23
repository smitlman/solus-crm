using Microsoft.EntityFrameworkCore;
using Dal.DBContext;
using Dal.Api;
using BL.Api;
using BL.Services;
using BL;
using Dal;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();


builder.Services.AddDbContext<CrmDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));


builder.Services.AddScoped<IUser, UserService>();
builder.Services.AddScoped<IClient, ClientService>();
builder.Services.AddScoped<IInvoice, InvoiceService>();
builder.Services.AddScoped<IPayment, PaymentService>();
builder.Services.AddScoped<IProposal, ProposalService>();
builder.Services.AddScoped<ITransaction, TransactionService>();
builder.Services.AddScoped<IDal, DalManager>();


builder.Services.AddScoped<IBLUser, BLUserService>();
builder.Services.AddScoped<IBLClient, BLClientService>();
builder.Services.AddScoped<IBLInvoice, BLInvoiceService>();
builder.Services.AddScoped<IBLPayment, BLPaymentService>();
builder.Services.AddScoped<IBLProposal, BLProposalService>();
builder.Services.AddScoped<IBLTransaction, BLTransactionService>();
builder.Services.AddScoped<IBL, BLManager>();


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});
var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("AllowFrontend");
app.MapControllers();
app.Run();