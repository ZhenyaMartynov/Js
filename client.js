Teams.Add('Test', 'Test', { r: 0 });

Teams.OnPlayerChangeTeam.Add(function (p) { p.Spawns.Spawn(); });
Teams.OnRequestJoinTeam.Add(function (p, t) { 
   t.Add(p); 
  try {
    menu.ItemsService.SkyColor = { r: 1 };
  } catch (err) { msg.Show(err); }
});

let a = AreaPlayerTriggerService.Get('A');
a.Tags = ['a'];
a.Enable = true;
a.OnEnter.Add(function (p) {
  p.PopUp('Привет!');
})
