import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PosTagService {

  //Need to add this data into json file in assets
  private pos_tag_dict = {'ADJ': '<b><i>Adjective</i></b><br>Adjectives are words that typically modify nouns and specify their properties or attributes',
    'ADV': '<b><i>Adverb</i></b><br>Adverbs are words that typically modify verbs for such categories as time, place, direction or manner. They may also modify adjectives and other adverbs, as in very briefly or arguably wrong.',
    'INTJ' : '<b><i>Interjection</i></b><br>An interjection is a word that is used most often as an exclamation or part of an exclamation. It typically expresses an emotional reaction, is not syntactically related to other accompanying expressions, and may include a combination of sounds not otherwise found in the language.',
    'NOUN': '<b><i>Noun</i></b><br>Nouns are a part of speech typically denoting a person, place, thing, animal or idea.',
    'PROPN': '<b><i>Proper noun</i></b><br>A proper noun is a noun (or nominal content word) that is the name (or part of the name) of a specific individual, place, or object.',
    'VERB': '<b><i>Verb</i></b><br>A verb is a member of the syntactic class of words that typically signal events and actions, can constitute a minimal predicate in a clause, and govern the number and types of other constituents which may occur in the clause. Verbs are often associated with grammatical categories like tense, mood, aspect and voice, which can either be expressed inflectionally or using auxilliary verbs or particles.'
  };

  constructor(private http: HttpClient) {

  }

  getPosTagData(tag) {
    return this.pos_tag_dict[tag];
  }

}