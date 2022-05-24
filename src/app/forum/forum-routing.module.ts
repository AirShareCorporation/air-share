import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from './forum.component';
import { TopicComponent } from './topic/topic.component';

const routes: Routes = [
  {
     path: '',
     component: ForumComponent,
     children: [
      {
        path: '',
        children: [
          {path: 'topic/id:', component: TopicComponent },

        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
