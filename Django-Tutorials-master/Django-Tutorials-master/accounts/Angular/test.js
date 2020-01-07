<html agr-app>
<head>
    <script src = 'angular.js'></script>
</head>

<body>
<input ng-model = 'user.name'>
<div ng-show = 'user.name'>HI {{user.name}}</div>
</body>
</html>
