#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["UM.Api/UM.Api.csproj", "UM.Api/"]
COPY ["UM.Infrastructure/UM.Infrastructure.csproj", "UM.Infrastructure/"]
COPY ["UM.Domain/UM.Domain.csproj", "UM.Domain/"]
COPY ["UM.Application/UM.Application.csproj", "UM.Application/"]
COPY ["Framework/Logistic.Framework.csproj", "Framework/"]
COPY ["Logistic.Service/Logistic.Service.csproj", "Logistic.Service/"]
RUN dotnet restore "UM.Api/UM.Api.csproj"
COPY . .
WORKDIR "/src/UM.Api"
RUN dotnet build "UM.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "UM.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "UM.Api.dll"]