Teams.Add('Test', 'Test', { r: 0 });

Teams.OnPlayerChangeTeam.Add(function (p) { p.Spawns.Spawn(); });
Teams.OnRequestJoinTeam.Add(function (p, t) { t.Add(p); });

let a = AreaPlayerTriggerService.Get('A');
a.Tags = ['a'];
a.Enable = true;
a.OnEnter.Add(function (p) {
  p.PopUp('Привет!');
})
