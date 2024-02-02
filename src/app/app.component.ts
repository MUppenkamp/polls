import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Poll } from './polls.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  /**
   * Poll contain question and answers
   */
  public poll: Poll = {
    question: 'Mit den Winterhärtezonen von 1a bis 13b lässt sich herausfinden ...?',
    answers: [
      {
        text: '... welches Frostschutzmittel für ein Fahrzeug geeignet ist',
        voted: 0,
        color: 'tropical-indigo'
      },
      {
        text: '...wie der Heizkessel einer Gasheizung eingestellt werden muss',
        voted: 0,
        color: 'violet'
      },
      {
        text: '... welche Tiefsttemperatur Pflanzen ohne Schäden überstehen können',
        voted: 0,
        color: 'lavender-pink'
      },
    ]
  };

  /**
   * Contains the index of the answer
   */
  public votedFor: number | null = null;

  /**
   * Workflow when someone votes for an answer
   * @param index of the answer
   */
  public vote(index: number): void {
    const answer = this.poll.answers[index];
    answer.voted += 1;
    this.votedFor = index;
  }

  public convertToAlphabet(index: number): string {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet[index] ?? index.toString();
  }
}
