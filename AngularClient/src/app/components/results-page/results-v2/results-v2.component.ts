import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ThesaurusService} from '../../../services/thesaurus.service';
import {ServerConfig} from '../../../services/serverConfig';


@Component({
  selector: 'app-results-v2',
  templateUrl: './results-v2.component.html',
  styleUrls: ['./results-v2.component.css'],

})
export class ResultsV2Component implements OnInit {
  public input_word;
  public input_lang;
  public response_data;
  public isAudioPlaying = false;
  public loading = false;
  constructor(private route: ActivatedRoute, private thesaurusService: ThesaurusService, private serverConfig: ServerConfig ) {
    this.route.queryParams.subscribe(params => {
      this.input_word = params.word;
      this.input_lang = params.lang;
    });
    this.getData();
    thesaurusService.search_event.subscribe((data) => {
      this.input_word = data[0];
      this.input_lang = data[1];
      this.getData();
    });
  }
  ngOnInit() {
  }

  getData() {
    this.loading = true;
    this.thesaurusService.getThesaurusData(this.input_word, this.input_lang).subscribe((data) => {
      this.response_data = data;
      if (this.response_data.response_code === 200) {
        this.response_data.response_data.synonyms.sort((a, b) => -1 * (parseFloat(a.similarity) - parseFloat(b.similarity)));
      }
      this.loading = false;
    });
  }

  search(input_word, lang) {
    this.thesaurusService.search_event.emit([input_word, lang]);
  }

  playAudio(input_word) {
    this.isAudioPlaying = true;
    const audioObj = new Audio();
    audioObj.src = this.serverConfig.base_url + '/readword?word=' + input_word;
    audioObj.load();
    audioObj.play().then(() => {
      this.isAudioPlaying = false;
    });
  }

  heighlightWord(word, sentence) {
    return sentence.toLowerCase().replace(word, '<b>' + word + '</b>');
  }
}