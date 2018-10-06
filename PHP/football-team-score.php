<?php
function run($teamKey) {
	/*
	* Some work here; return type and arguments should be according to the problem's requirements
	*/
	
	$url = 'https://raw.githubusercontent.com/openfootball/football.json/master/2014-15/en.1.json';
	
	$json = getCurl($url);
	$obj = json_decode($json, true);

	$count = 0;

	foreach ($obj['rounds'] as $value) {
		
		foreach ($value['matches'] as $val) {
			
			if( $val['team1']['key'] == $teamKey ) {
				$goals += $val['score1'];
			}

			if( $val['team2']['key'] == $teamKey ) {
				$goals += $val['score2'];
			}
			
		}
	}

	return $goals;
}

function getCurl($url) {
	
	 $ch = curl_init(); 

        // set url 
        curl_setopt($ch, CURLOPT_URL, "example.com"); 

    //return the transfer as a string 
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 

    // $output contains the output string 
    $output = curl_exec($ch); 

    // close curl resource to free up system resources 
    curl_close($ch);
	
}

run("arsenal");