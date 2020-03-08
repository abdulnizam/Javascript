SELECT pl.id, pl.title, COALESCE(sum(res.number_of_tickets), sum(res.number_of_tickets), 0) as reserved_tickets 
from plays as pl
left join reservations res on res.play_id=pl.id 
group by pl.id, pl.title 
order by  COALESCE(sum(res.number_of_tickets), sum(res.number_of_tickets), 0) desc, pl.id asc;
