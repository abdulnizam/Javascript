from typing import List from uuid import uuid4

class Player:
    def __init__(self, uuid: str, segments: List[str]):
          self.uuid = uuid
          self.segments = segments
class Experiment:
    def __init__(self, name: str, ratio: int, contents: List):
          self.uuid = uuid4()
          self.name = name
          self.ratio = ratio
          self.contents = contents
class Segment:
    def __init__(self, uuid: str, name: str, experiments: List[Experiment]):
          self.uuid = uuid
          self.name = name
          self.experiments = experiments
class Package:
    def __init__(self, uuid: str, segments: List[Segment]):
          self.uuid = uuid
          self.segments = segments
    def get_content(self, player: Player):
        player_segments = self.filter_player_segment(player)
        if player_segments:
            return self.filter_valid_segment(player_segments)
        else:
            return []
    def filter_player_segment(self, player):
        results = []
        for value in self.segments:
            # match all segments with valid player segments
            if value.uuid in player.segments:
                results.append(value)
        return results
    def filter_valid_segment(self, segments):
        for value in segments:
            # filter all experiments ratio to add
            experi = [v.ratio for v in value.experiments]
            # return the first valid segment
            if (sum(experi) <= 100) {
                return value;
            }
        return []
