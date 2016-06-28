import * as utils from './utils';

export { utils };
export { default as router } from './router';
export { default as logger } from './logger';
export { default as SchedulerService } from './schedulerService';
export { default as RetryPolicy } from './observableExtentsions/retryPolicy';
export { default as Guard } from './guard';
export { default as Environment } from './environment';

// these imports add functionality to rx
import './observableExtentsions/retryPolicyExt';
import './observableExtentsions/subscribeWithRouter';